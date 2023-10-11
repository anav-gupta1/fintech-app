import pandas as pd
import sqlite3

# Load the mock_data.csv
data = pd.read_csv('C:\\Users\\aarya\\Downloads\\MOCK_DATA.csv')

# Save to SQLite database
DATABASE = ('C:\\Users\\aarya\\Downloads\\business_data.db')
conn = sqlite3.connect(DATABASE)
data.to_sql('businesses', conn, if_exists='replace', index=False)
conn.close()
