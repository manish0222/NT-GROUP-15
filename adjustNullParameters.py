import pandas as pd
# Read your CSV file into a DataFrame
# Replace 'your_file.csv' with the actual file path
df = pd.read_csv('your_file.csv')

# Iterate through each column and apply forward-fill
for column_name in df.columns:
    df[column_name] = df[column_name].fillna(method='ffill')

# Save the updated DataFrame back to a CSV file and new file will be created
# if you want to keep data in old file change file name below |
df.to_csv('your_updated_file.csv', index=False)           # <-|

def trim_first_row(file_path):
    # Read your CSV file into a DataFrame
    df = pd.read_csv(file_path)

    # Trim extra spaces from the first row
    df.iloc[0] = df.iloc[0].str.strip()

    # Save the updated DataFrame back to the same CSV file
    df.to_csv(file_path, index=False)

# Replace 'your_file.csv' with the actual file path
trim_first_row('your_file_name.csv')


