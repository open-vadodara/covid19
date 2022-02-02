# covid19

Covid19 Cases in Vadodara

Data pulled from covid19bharat.org (an initiative by DataKind Bengaluru)

# API

### Cumulative Cases
https://open-vadodara.github.io/covid19/data/cumulative.json

### Time Series of Cumulative Cases
https://open-vadodara.github.io/covid19/data/timeseries.json

### Vaccination Data
https://open-vadodara.github.io/covid19/data/vaccination.json


**Sample data format from cowin**

```javascript
{
    'topBlock':
    {
        'sites':
        {
            'total': 27,
            'govt': 27,
            'pvt': 0,
            'today': None
        },
        'sessions':
        {
            'total': 3802,
            'govt': 3802,
            'pvt': 0,
            'today': None
        },
        'registration':
        {
            'total': None,
            'male': None,
            'female': None,
            'others': None,
            'today': None
        },
        'vaccination':
        {
            'total': 2381681,
            'male': 1267703,
            'female': 1097441,
            'others': 404,
            'covishield': 2111635,
            'covaxin': 270046,
            'sputnik': 0,
            'zycov': 0,
            'today': 579,
            'tot_dose_1': 1210988,
            'tot_dose_2': 1154562,
            'tot_pd': 16131,
            'total_doses': 2381681,
            'today_dose_one': 18,
            'today_dose_two': 412,
            'today_dose_pd': 149,
            'today_male': 319,
            'today_female': 260,
            'today_others': 0,
            'today_aefi': 0,
            'aefi': 76,
            'yesterday_vac': 1082,
            'yesterday_dose_one': 79,
            'yesterday_dose_two': 551,
            'yesterday_dose_pd': 452
        }
    },
    'vaccinationDoneByTime': [
        {
            'ts': '2022-01-16 10',
            'timestamps': '2022-01-16T11:00:00.000Z',
            'label': '10:00-11:00',
            'count': 31,
            'dose_one': 1,
            'dose_two': 26,
            'dose_pd': 4
        },
        ...
    ],
    'last7DaysRegistration': [],
    'last30DaysAefi': [
        {
            'vaccine_date': '2021-12-17',
            'aefi': 0
        },
        ...
    ],
    'last5daySessionStatus': [
        {
            'session_date': '2021-12-20',
            'total': '84',
            'planned': '2',
            'ongoing': '49',
            'completed': '33'
        },
        ...
    ],
    'getBeneficiariesGroupBy': [
         {
            'session_site_id': '222254',
            'title': 'Bhadarwa PHC',
            'session_site_name': 'Bhadarwa PHC',
            'total': 12915,
            'partial_vaccinated': 7365,
            'totally_vaccinated': 5426,
            'precaution_dose': 124,
            'today': 92
        },
        ...
    ],
    'reportFor': 'State : 11 & District: 155 | 2022-01-16',
    'aefiPercentage': 0.006,
    'vaccinationByAge':
    {
        'total': 2381681,
        'vac_15_17': 49837,
        'vac_18_45': 1302903,
        'vac_45_60': 645235,
        'above_60': 383706
    },
    'sessionSiteData':
    {
        'total_sites': '1102',
        'govt_sites': '1058',
        'pvt_sites': '44',
        'sites_today': 27,
        'total_sessions': '35230',
        'govt_sessions': '33839',
        'pvt_sessions': '1391'
    },
    'vaccinationDoneByTimeAgeWise': [
        {
            'ts': '2022-01-16 10',
            'timestamps': '2022-01-16T11:00:00.000Z',
            'label': '10:00-11:00',
            'total': 31,
            'vac_15_17': 0,
            'vac_18_45': 18,
            'vac_45_60': 3,
            'vac_60_above': 10,
            'rural': 30,
            'urban': 5
        },
        ...
    ],
    'timestamp': '2022-01-16 17:30'
}

```