import os
import requests
import datetime
import pandas as pd


OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
VACC_DATA = os.path.join(OUTPUT_DIR, 'vaccination.json')

# map url to filename
DWNLD_MAP = {
    'https://data.covid19bharat.org/csv/latest/district_wise.csv': 'cumulative',
    'https://data.covid19bharat.org/csv/latest/districts.csv': 'timeseries'
    # 'https://data.covid19bharat.org/csv/latest/cowin_vaccine_data_districtwise.csv': 'cowin'
}
DISTRICT_NAME = 'Vadodara'

def cowin_data(curr_date=datetime.datetime.today()):
    params = {
        's_id': 11,
        'd_id': 155,
        'd': curr_date.strftime("%Y-%m-%d")
    }
    base_url = 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id={s_id}&district_id={d_id}&date={d}'.format(**params)

    resp = requests.request('GET', base_url)
    vad_data = resp.json()

    new_data = {
        'updated_on': curr_date.strftime('%d-%m-%Y'),
        'total_vaccinations': vad_data['topBlock']['vaccination']['total'],
        'total_sessions': vad_data['topBlock']['sessions']['total'],
        'total_sites': vad_data['topBlock']['sites']['total'],
        'dose_one': vad_data['topBlock']['vaccination']['tot_dose_1'],
        'dose_two': vad_data['topBlock']['vaccination']['tot_dose_2'],
        'dose_precautionary': vad_data['topBlock']['vaccination']['tot_pd'],
        'male': vad_data['topBlock']['vaccination']['male'],
        'female': vad_data['topBlock']['vaccination']['female'],
        'others': vad_data['topBlock']['vaccination']['others'],
        'covaxin': vad_data['topBlock']['vaccination']['covaxin'],
        'covishield': vad_data['topBlock']['vaccination']['covishield'],
        'sputnik': vad_data['topBlock']['vaccination']['sputnik'],
        'aefi': vad_data['topBlock']['vaccination']['aefi'],
        'zycov': vad_data['topBlock']['vaccination']['zycov'],
        'vac_18_45': vad_data['vaccinationByAge']['vac_18_45'],
        'vac_45_60': vad_data['vaccinationByAge']['vac_45_60'],
        'above_60': vad_data['vaccinationByAge']['above_60']
    }

    # read old data, append live data & save it back
    if os.path.exists(VACC_DATA):
        old_data = pd.read_json(VACC_DATA)
        updated_data = old_data.append(new_data, ignore_index=True)
        updated_data.to_json(VACC_DATA, orient='records')
    else:
        new_df = pd.DataFrame.from_dict(new_data, orient='index').T
        new_df.to_json(VACC_DATA, orient='records')

    print('vaccination data is updated!')

cowin_data()

# for url in DWNLD_MAP:
#     print('Generating {} data from {}'.format(DWNLD_MAP[url], url))
#     df = pd.read_csv(url)
#     vad_df = df[df['District'].str.contains(DISTRICT_NAME)]
#     vad_df.to_json(os.path.join(OUTPUT_DIR, '{}.json'.format(DWNLD_MAP[url])), orient='records')
