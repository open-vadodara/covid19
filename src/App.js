import React from 'react';
import Cards from './components/cards';
import BarChart from './components/bar_chart';
import LineChart from './components/line_chart';
import './App.css';

const API_CUMULATIVE = require('./data/cumulative.json')
const API_TIMESERIES = require('./data/timeseries.json')
const API_VACCINATION = require('./data/vaccination_js.json')

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
  }

  handleClick(param) {
    this.setState({
      'sel_col': param
    })
  }

  render() {
    return (
      <div className='container px-4 pb-2' id='featured-5'>
        <div id='topcards' className='row g-4 pb-5 row-cols-1 row-cols-lg-5'>
          <Cards type='Confirmed' data={this.state['cumulative']} customClick={ () => this.handleClick('Confirmed') } />
          <Cards type='Active' data={this.state['cumulative']} customClick={ () => this.handleClick('Active') } />
          <Cards type='Recovered' data={this.state['cumulative']} customClick={ () => this.handleClick('Recovered') } />
          <Cards type='Deceased' data={this.state['cumulative']} customClick={ () => this.handleClick('Deceased') } />
          <Cards type='Vaccination' data={this.state['vaccination']} customClick={ () => this.handleClick('Vaccination') } />
        </div>

        <div className='b-example-divider'></div>

        <div className='row g-5'>
          <div className='col p-5'>
            <h2>Cumulative {this.state['sel_col']}</h2>
            <LineChart data={ API_TIMESERIES['timeseries'] } type={ this.state['sel_col'] } size={ [1000, 800] } />
          </div>
        </div>

        <div className='row g-5'>
          <div className='col-md-2'>
            <h2>Delta {this.state['sel_col']}</h2>
            {/*<LineChart data={ API_TIMESERIES['timeseries'] } type='Tested' size={ [500, 500] } />*/}
          </div>
        </div>

      </div>
    )
  }
}

export default App;
