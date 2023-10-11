from flask import Flask, request, render_template, jsonify
import sqlite3
import pickle
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


with open('model.pkl', 'rb') as f:
    model, label_encoders = pickle.load(f)

@app.route('/')
def index():
    return render_template('index.html')  # Add website landing page

@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    
    
    df = pd.DataFrame([data])
    
    predictions = model.predict(df)
    df['good_fit_bool'], df['acquisition_chance'], df['failure_chance'], df['exit_amt'], df['exit_time_period_yrs'], df['potential_TAM'], df['2x_prob_1yr'], df['2x_prob_5yr'], df['10x_prob_1yr'], df['10x_prob_5yr']= predictions[0] 
    
    conn = sqlite3.connect('business_data.db')
    df.to_sql('your_table_name', conn, if_exists='append', index=False)  # Add table name
    
    return jsonify({'message': 'Data added and predictions saved!'})

# Placeholder for  search functionality
@app.route('/search')
def search():
    # Placeholder for now
    return "Search Functionality Here"

# Placeholder for company profiles
@app.route('/profile/<company_name>')
def company_profile(company_name):
    # Placeholder for now
    return f"Profile for company {company_name}"

if __name__ == '__main__':
    app.run(debug=True)
