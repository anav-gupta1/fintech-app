import pandas as pd
import sqlite3

data = pd.read_csv('MOCK_DATA.csv')

DATABASE = ('business_data.db')
conn = sqlite3.connect(DATABASE)
data.to_sql('businesses', conn, if_exists='replace', index=False)
conn.close()
