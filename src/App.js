import React from 'react';
import Cards from './components/cards';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    // maintain data from API in states & pass it to cards using props
    this.state = {
      'cumulatives': [{
        " .": "188",
        "State_Code": "GJ",
        "State": "Gujarat",
        "District_Key": "GJ_Vadodara",
        "District": "Vadodara",
        "Confirmed": 131761,
        "Active": 13894,
        "Recovered": 117041,
        "Deceased": 826,
        "Migrated_Other": 0,
        "Delta_Confirmed": 1413,
        "Delta_Active": -1485,
        "Delta_Recovered": 2894,
        "Delta_Deceased": 4,
        "District_Notes": null,
        "Last_Updated": null
      }],
      'timeseries': [
        {
          "Date": "2020-04-26",
          "State": "Gujarat",
          "District": "Vadodara",
          "Confirmed": 234,
          "Recovered": 56,
          "Deceased": 12,
          "Other": 0,
          "Tested": null
        },
        {
          "Date": "2020-04-27",
          "State": "Gujarat",
          "District": "Vadodara",
          "Confirmed": 240,
          "Recovered": 56,
          "Deceased": 13,
          "Other": 0,
          "Tested": null
        }
      ],
      'vaccination': [
        {
          "updated_on": "01-01-2022",
          "total_vaccinations": 2276408,
          "total_sessions": 7876,
          "total_sites": 63,
          "dose_one": 1137530,
          "dose_two": 1138878,
          "dose_precautionary": 0.0,
          "male": 1220092,
          "female": 1055926,
          "others": 390,
          "covaxin": 197330,
          "covishield": 2079078,
          "sputnik": 0.0,
          "aefi": 75,
          "zycov": 0.0,
          "vac_18_45": 1264357.0,
          "vac_45_60": 638013.0,
          "above_60": 374038
        },
        {
          'above_60': 402810,
          'aefi': 76,
          'covaxin': 303937,
          'covishield': 2154980,
          'dose_one': 1219905,
          'dose_precautionary': 39562,
          'dose_two': 1199450,
          'female': 1122566,
          'male': 1296371,
          'others': 412,
          'sputnik': 0,
          'total_sessions': 1126,
          'total_sites': 5,
          'total_vaccinations': 2458917,
          'updated_on': "06-02-2022",
          'vac_18_45': 1330685,
          'vac_45_60': 651948,
          'zycov': 0
        }
      ]
    }
  }

  render() {
    return (
      <div className="container px-4 py-5" id="featured-5">
        <div id='topcards' className="row g-4 py-5 row-cols-1 row-cols-lg-5">
          <Cards type='Confirmed' data={this.state['cumulatives']} />
          <Cards type='Active' data={this.state['cumulatives']} />
          <Cards type='Recovered' data={this.state['cumulatives']} />
          <Cards type='Deceased' data={this.state['cumulatives']} />
          <Cards type='Vaccination' data={this.state['vaccination']} />
        </div>

        {/* Other html components */}
      </div>
    )
  }
}

export default App;
