import os
import pandas as pd

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_data')

# map url to filename
DWNLD_MAP = {
    'https://data.covid19bharat.org/csv/latest/district_wise.csv': 'cumulative',
    'https://data.covid19bharat.org/csv/latest/districts.csv': 'timeseries'
    # 'https://data.covid19bharat.org/csv/latest/cowin_vaccine_data_districtwise.csv': 'cowin'
}
DISTRICT_NAME = 'Vadodara'


for url in DWNLD_MAP:
    print('Generating {} data from {}'.format(DWNLD_MAP[url], url))
    df = pd.read_csv(url)
    vad_df = df[df['District'].str.contains(DISTRICT_NAME)]
    vad_df.to_json(os.path.join(OUTPUT_DIR, '{}.json'.format(DWNLD_MAP[url])), orient='records')

print('DONE!')
