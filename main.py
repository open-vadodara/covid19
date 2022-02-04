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
COWIN_STATE_ID = 11
COWIN_DISTR_ID = 155


def cowin_data(from_date, to_date):
    '''
    Given a range of dates (from & to), extracts vadodara's
    '''
    day_count = (to_date - from_date) + datetime.timedelta(days=1)
    new_data_arr = []

    old_df = pd.DataFrame(columns=['updated_on'])
    if os.path.exists(VACC_DATA) and os.path.getsize(VACC_DATA) != 0:
        old_df = pd.read_json(VACC_DATA)
        # old_df['updated_on'] = pd.to_datetime(old_df['updated_on'])

    for curr_date in (from_date + datetime.timedelta(n) for n in range(day_count.days)):
        params = {
            's_id': COWIN_STATE_ID,
            'd_id': COWIN_DISTR_ID,
            'd': curr_date.strftime("%Y-%m-%d")
        }
        base_url = 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id={s_id}&district_id={d_id}&date={d}'.format(**params)
        print('fetching ------>', base_url)
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

        # if data already exists, replace with new_data values
        if old_df[old_df['updated_on'] == curr_date.strftime('%d-%m-%Y')].empty == False:
            print('replaced values for', curr_date.strftime('%d-%m-%Y'))
            old_df[old_df['updated_on'] == curr_date.strftime('%d-%m-%Y')] = list(new_data.values())
        else:
            new_data_arr.append(new_data)

    new_df = pd.DataFrame(new_data_arr)
    merged_df = pd.concat([old_df, new_df]).drop_duplicates().reset_index(drop=True)
    merged_df.to_json(VACC_DATA, orient='records')
    return merged_df


if __name__ == '__main__':
    for url in DWNLD_MAP:
        print('Generating {} data from {}'.format(DWNLD_MAP[url], url))
        df = pd.read_csv(url)
        vad_df = df[df['District'].str.contains(DISTRICT_NAME)]
        vad_df.to_json(os.path.join(OUTPUT_DIR, '{}.json'.format(DWNLD_MAP[url])), orient='records')
    cowin_data(datetime.date.today(), datetime.date.today())
