import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import LabelEncoder
import pickle
from sklearn.impute import SimpleImputer

train_data = pd.read_csv("C:\\Users\\aarya\\GitHub\\shis-tech\\trainingdata.csv")

print(train_data.head())

train_data['good_fit_bool'] = train_data['good_fit_bool'].map({'TRUE': 1, 'FALSE': 0})

cat_imputer = SimpleImputer(strategy='most_frequent')
train_data[['industry', 'sector']] = cat_imputer.fit_transform(train_data[['industry', 'sector']])

label_encoders = {}
for column in ['sector', 'industry']:
    le = LabelEncoder()
    train_data[column] = le.fit_transform(train_data[column])
    label_encoders[column] = le

X = train_data[['age', 'YOE', 'uni_tier', 'industry', 'sector', 'valuation', 'growth_rate', 'funding_round', 'investor_no']].copy()
y = train_data[['good_fit_bool', 'acquisition_chance', 'failure_chance', 'exit_amt', 'exit_time_period_yrs', 'potential_TAM', 'prob_2x_1yr', 'prob_2x_5yr', 'prob_10x_1yr', 'prob_10x_5yr']].copy()

num_imputer = SimpleImputer(strategy='median')
X = num_imputer.fit_transform(X)
y = num_imputer.fit_transform(y)

print(pd.DataFrame(X).head())
print(pd.DataFrame(y).head())

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestRegressor()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

with open('model.pkl', 'wb') as f:
    pickle.dump((model, label_encoders), f)

print("Model saved")
