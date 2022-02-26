import React from 'react';
import Cards from './components/cards';
import LineChart from './components/line_chart';
import InfoCard from './components/info_card';

import './App.css';
import github_logo from'./images/github.png';

const API_CUMULATIVE = require('./data/cumulative.json')
const API_TIMESERIES = require('./data/timeseries.json')
const API_VACCINATION = require('./data/vaccination_js.json')
const POPULATION = 3639775    // static info


class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    // maintain data from API in states & pass it to cards using props
    this.state = {
      'cumulative': API_CUMULATIVE['cumulative'][0],
      'timeseries': API_TIMESERIES['timeseries'],
      'vaccination': API_VACCINATION['vaccination'],
      'sel_col': 'Confirmed'
    }

    let confirmed_per_lakh = Math.round(((this.state['cumulative']['Confirmed'] / POPULATION) * 100000) * 100) / 100
    let confirmed_case_ratio = Math.round((confirmed_per_lakh / POPULATION) * 100 * 100) / 100
    let active_ratio = Math.round((this.state['cumulative']['Active'] / this.state['cumulative']['Confirmed']) * 10 * 100) / 100
    let recovery_ratio = Math.round((this.state['cumulative']['Recovered'] / this.state['cumulative']['Confirmed']) * 100 * 100) / 100
    let fatality_ratio = Math.round((this.state['cumulative']['Deceased'] / this.state['cumulative']['Confirmed']) * 100 * 100) / 100

    this.insights = {
      'confirmed_per_lakh': {
        'title': 'Confirmed per lakh',
        'num': confirmed_per_lakh,
        'desc': `~ ${Math.floor(confirmed_per_lakh)} out of every lakh have tested positive. That is a ${ confirmed_case_ratio }% ratio of confirmed cases`
      },
      'active_ratio': {
        'title': 'Active Ratio',
        'num': active_ratio,
        'desc': `For every 100 confirmed cases, ~${active_ratio} are currently infected`
      },
      'recovery_ratio': {
        'title': 'Recovery Ratio',
        'num': recovery_ratio,
        'desc': `For every 100 confirmed cases, ~${recovery_ratio}% have recovered from the virus`
      },
      'fatality_ratio': {
        'title': 'Fatality Ratio',
        'num': fatality_ratio,
        'desc': `For every 100 confirmed cases, ~${fatality_ratio} have unfortunately passed away from the virus`
      }
    }

  }

  handleClick(param) {
    this.setState({
      'sel_col': param
    })
  }

  render() {
    let sel_data = this.state['sel_col'] === 'Vaccination' ? API_VACCINATION['vaccination'] : API_TIMESERIES['timeseries']

    return (
      <div className='container px-4 pb-2' id='featured-5'>
        <div id='topcards' className='row g-4 pb-5 row-cols-1 row-cols-lg-5'>
          <Cards type='Confirmed' sel={this.state.sel_col} data={this.state['cumulative']} customClick={ () => this.handleClick('Confirmed') } />
          <Cards type='Active' sel={this.state.sel_col} data={this.state['cumulative']} customClick={ () => this.handleClick('Active') } />
          <Cards type='Recovered' sel={this.state.sel_col} data={this.state['cumulative']} customClick={ () => this.handleClick('Recovered') } />
          <Cards type='Deceased' sel={this.state.sel_col} data={this.state['cumulative']} customClick={ () => this.handleClick('Deceased') } />
          <Cards type='Vaccination' sel={this.state.sel_col} data={this.state['vaccination']} customClick={ () => this.handleClick('Vaccination') } />
        </div>

        <div className='b-example-divider'></div>

        <div className='row g-5 mb-5 pb-5'>
          <LineChart data={ sel_data } type={ this.state['sel_col'] } size={ [1000, 800] } />
        </div>

        <div className='row g-5 mb-5 pb-5'>
          <InfoCard insights={ this.insights['confirmed_per_lakh'] } />
          <InfoCard insights={ this.insights['active_ratio'] } />
          <InfoCard insights={ this.insights['recovery_ratio'] } />
          <InfoCard insights={ this.insights['fatality_ratio'] } />
        </div>

        <div className='mx-5'>
          <p>Source: Case data being pulled from Gujarat state bulletin. Vaccination data from COWIN</p>
          <p>You can download this data from this <a href='https://github.com/open-vadodara/covid19/tree/main/src/data'>github repository</a>. This data gets updated every midnight. This data is meant to be open and free to be consumed in anyway possible. This project was built for the betterment of humanity.</p>
        </div>

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">asd</svg>
            </a>
            <span className="text-muted">© 2021 Open Vadodara</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a rel="noopener noreferrer" className="text-muted" target="_blank" href="https://github.com/open-vadodara">
                <img src={github_logo} alt="Github Logo" style={{width: "2rem"}} />
              </a>
            </li>
          </ul>
        </footer>

      </div>
    )
  }
}

export default App;
