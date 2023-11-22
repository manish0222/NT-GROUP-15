import os
import pandas as pd

# Specify the directory containing your CSV files
directory_path = 'C:/Users/USER/Downloads/Exchange_Rate_Report Zip FIle/'   # <-- replace with your folder location of all CSV's

# List all CSV files in the directory
csv_files = [f for f in os.listdir(directory_path) if f.endswith('.csv')]

# Initialize an empty DataFrame to store the merged data
merged_df = pd.DataFrame()

# Iterate through each CSV file and concatenate the data
for csv_file in csv_files:
    file_path = os.path.join(directory_path, csv_file)
    df = pd.read_csv(file_path)
    merged_df = pd.concat([merged_df, df], ignore_index=True)

# Save the merged DataFrame to a new CSV file
merged_df.to_csv('merged_data.csv', index=False)


# if your heading has spaces in start and end and to filter that you can use this function
def trim_first_row(file_path):
    # Read your CSV file into a DataFrame
    df = pd.read_csv(file_path)

    # Trim extra spaces from the first row (column headings)
    df.columns = df.columns.str.strip()

    # Save the updated DataFrame back to the same CSV file
    df.to_csv(file_path, index=False)

# Replace 'your_file.csv' with the actual file path
trim_first_row('merged_data.csv')

