import pandas as pd

# Read your CSV file into a DataFrame
df = pd.read_csv('Exchange_Rate_Report_2012.csv')
# similarly apply for each year ie 10 years manually or iterate using a loop

# Convert the 'Date' column to datetime with the correct format
df['Date'] = pd.to_datetime(df['Date'], format='%d-%m-%Y')

# Convert the datetime to Unix timestamp and create a new column 'unix_timestamp'
df['unix_timestamp'] = (df['Date'] - pd.Timestamp("1970-01-01")).dt.total_seconds().astype(int)

# Save the updated DataFrame back to the same CSV file  a new column is created with name 'unix_timestamp'
df.to_csv('your_file.csv', index=False)
#if you want to change data in same file apply changes accordingly in the above line