import os
import pandas as pd

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_data')
CASES_DATA = 'https://data.covid19bharat.org/csv/latest/district_wise.csv'
COWIN_DATA = 'http://data.covid19bharat.org/csv/latest/cowin_vaccine_data_districtwise.csv'

case_df = pd.read_csv(CASES_DATA)
cowin_df = pd.read_csv(COWIN_DATA)

vad_cases = cases_df[cases_df['District'] == 'Vadodara']
vad_cowin = cowin_df[cowin_df['District'] == 'Vadodara']

case_df.to_json(os.path.join(OUTPUT_DIR, 'cases.json'), orient='records')
