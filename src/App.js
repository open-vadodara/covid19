import React from 'react';
import Cards from './components/cards';
import BarChart from './components/bar_chart';
import './App.css';

// read updated data
const API_CUMULATIVE = require('./data/cumulative.json')
const API_TIMESERIES = require('./data/timeseries.json')
const API_VACCINATION = require('./data/vaccination_js.json')

class App extends React.Component {
  constructor(props) {
    super(props)

    // maintain data from API in states & pass it to cards using props
    this.state = {
      'cumulative': API_CUMULATIVE['cumulative'],
      'timeseries': API_TIMESERIES['timeseries'],
      'vaccination': API_VACCINATION['vaccination']
    }
  }

  render() {
    return (
      <div className='container px-4 py-5' id='featured-5'>
        <div id='topcards' className='row g-4 py-5 row-cols-1 row-cols-lg-5'>
          <Cards type='Confirmed' data={this.state['cumulative'][0]} />
          <Cards type='Active' data={this.state['cumulative'][0]} />
          <Cards type='Recovered' data={this.state['cumulative'][0]} />
          <Cards type='Deceased' data={this.state['cumulative'][0]} />
          <Cards type='Vaccination' data={this.state['vaccination']} />
        </div>

        <div className='b-example-divider'></div>

        <div className='row g-5'>
          <div className='col-md-10'>
            <h2>Cumulative timeline</h2>
            <BarChart data={ this.state['timeseries'] } size={ [500, 500] } />
          </div>

          <div className='col-md-2'>
            <h2>Delta timeline</h2>
            <svg id='svg_delta_timeline'></svg>
            <p>adf asdf </p>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
