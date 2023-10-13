from flask import Flask, request, jsonify
from sqlalchemy import create_engine, MetaData, Table, select, and_, or_, text, bindparam
import os
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/onboarding": {"origins": "http://localhost:3000"}})  # Allow requests from 'http://localhost:3000'

with open('model.pkl', 'rb') as f:
    model, label_encoders = pickle.load(f)

DATABASE_URL = "sqlite:///business_data.db"
engine = create_engine(DATABASE_URL)

metadata = MetaData()
metadata.reflect(bind=engine)
table = metadata.tables['businesses']

@app.route('/', methods=['GET'])
def route():
    return "Hello"

@app.route('/onboarding', methods=['POST'])
def add_company():
    data = request.get_json()

    boolean_columns = ['college_bool', 'profitable']
    for col in boolean_columns:
        if data[col] == "Yes":
            data[col] = True
        elif data[col] == "No":
            data[col] = False

    for column in ['sector', 'industry']:
        le = label_encoders[column]
        data[column] = le.transform([data[column]])[0]

    input_data = pd.DataFrame([data])
    predictions = model.predict(input_data)

    (
        data['good_fit_bool'], data['acquisition_chance'], data['failure_chance'],
        data['exit_amt'], data['exit_time_period_yrs'], data['potential_TAM'],
        data['prob_2x_1yr'], data['prob_2x_5yr'], data['prob_10x_1yr'], data['prob_10x_5yr']
    ) = predictions[0]

    insert_statement = table.insert().values(**data)
    with engine.connect() as conn:
        conn.execute(insert_statement)

    return jsonify({'message': 'New company added and predictions saved!'})

@app.route('/run_model_on_database', methods=['POST'])
def run_model_on_database():
    query = select([table])
    with engine.connect() as conn:
        result = conn.execute(query)
    companies = [dict(row) for row in result]
    input_data = pd.DataFrame(companies)
    predictions = model.predict(input_data)

    for i, company in enumerate(companies):
        (
            company['good_fit_bool'], company['acquisition_chance'], company['failure_chance'],
            company['exit_amt'], company['exit_time_period_yrs'], company['potential_TAM'],
            company['prob_2x_1yr'], company['prob_2x_5yr'], company['prob_10x_1yr'], company['prob_10x_5yr']
        ) = predictions[i]

    update_statement = table.update().where(table.c.id == bindparam('id')).values(
        good_fit_bool=bindparam('good_fit_bool'),
        acquisition_chance=bindparam('acquisition_chance'),
        failure_chance=bindparam('failure_chance'),
        exit_amt=bindparam('exit_amt'),
        exit_time_period_yrs=bindparam('exit_time_period_yrs'),
        potential_TAM=bindparam('potential_TAM'),
        prob_2x_1yr=bindparam('prob_2x_1yr'),
        prob_2x_5yr=bindparam('prob_2x_5yr'),
        prob_10x_1yr=bindparam('prob_10x_1yr'),
        prob_10x_5yr=bindparam('prob_10x_5yr')
    )

    with engine.connect() as conn:
        conn.execute(update_statement, companies)

    return jsonify({'message': 'Model run on the entire database and output values updated!'})

@app.route('/investordash', methods=['GET'])
def search():
    params = request.args
    conditions = []

    if 'q' in params and params['q']:
        search_query = params['q']
        search_pattern = f"%{search_query}%"
        conditions.append(
            or_(
                table.c.first_name.ilike(search_pattern),
                table.c.last_name.ilike(search_pattern),
                table.c.company_bio.ilike(search_pattern),
                table.c.company_name.ilike(search_pattern)
            )
        )

    if 'age_range' in params:
        min_age, max_age = map(int, params['age_range'].split('-'))
        conditions.append(table.c.age.between(min_age, max_age))

    if 'yoe_range' in params:
        min_yoe, max_yoe = map(int, params['yoe_range'].split('-'))
        conditions.append(table.c.YOE.between(min_yoe, max_yoe))

    if 'college_bool' in params:
        conditions.append(table.c.college_bool == int(params['college_bool']))

    if 'uni_tier' in params:
        conditions.append(table.c.uni_tier.in_(params.getlist('uni_tier')))

    if 'industry' in params:
        conditions.append(table.c.industry == params['industry'])

    if 'sector' in params:
        conditions.append(table.c.sector == params['sector'])

    if 'city' in params:
        conditions.append(table.c.city == params['city'])

    if 'country' in params:
        conditions.append(table.c.country == params['country'])

    if 'valuation_range' in params:
        min_valuation, max_valuation = map(int, params['valuation_range'].split('-'))
        conditions.append(table.c.valuation.between(min_valuation, max_valuation))

    if 'profitable' in params:
        conditions.append(table.c.profitable == int(params['profitable']))

    if 'growth_rate' in params:
        conditions.append(table.c.growth_rate == int(params['growth_rate']))

    if 'funding_round' in params:
        conditions.append(table.c.funding_round == int(params['funding_round']))

    query = select([table]).where(and_(*conditions)) if conditions else select([table])

    with engine.connect() as conn:
        result = conn.execute(query)
        companies = [dict(row) for row in result]

    return jsonify(companies)

if __name__ == '__main__':
    app.run(debug=True)
