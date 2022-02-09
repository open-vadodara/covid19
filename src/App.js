import React, { useEffect, useState } from 'react';
import Cards from './components/cards';
import BarChart from './components/bar_chart';
import LineChart from './components/line_chart';
import './App.css';

const API_CUMULATIVE = require('./data/cumulative.json')
const API_TIMESERIES = require('./data/timeseries.json')
const API_VACCINATION = require('./data/vaccination_js.json')

// function App2() {

//   const [cardType, setCardType] = useState('')

//   return (
//     <div className='container px-4 py-5' id='featured-5'>
//       <div id='topcards' className='row g-4 py-5 row-cols-1 row-cols-lg-5'>
//         <Cards type='Confirmed' data={API_CUMULATIVE['cumulative'][0]} onClick={ () => setCardType('Confirmed') } />
//         <Cards type='Active' data={API_CUMULATIVE['cumulative'][0]} onClick={ () => setCardType('Active') } />
//         <Cards type='Recovered' data={API_CUMULATIVE['cumulative'][0]} onClick={ () => setCardType('Recovered') } />
//         <Cards type='Deceased' data={API_CUMULATIVE['cumulative'][0]} onClick={ () => setCardType('Deceased') } />
//         <Cards type='Vaccination' data={API_VACCINATION['vaccination']} onClick={ () => setCardType('Vaccination') } />
//       </div>

//       <div className='b-example-divider'></div>

//       <div className='row g-5'>
//         <div className='col-md-10'>
//           <h2>Cumulative timeline</h2>
//           {/*<BarChart data={ API_TIMESERIES } type={ cardType } size={ [500, 500] } />*/}
//           <LineChart data={ API_TIMESERIES['timeseries'] } type={ cardType } size={ [500, 500] } />
//         </div>

//         <div className='col-md-2'>
//           <h2>Delta timeline</h2>
//           <svg id='svg_delta_timeline'></svg>
//           <p>adf asdf </p>
//         </div>
//       </div>

//     </div>
//   )

// }

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
      <div className='container px-4 py-5' id='featured-5'>
        <div id='topcards' className='row g-4 py-5 row-cols-1 row-cols-lg-5'>
          <Cards type='Confirmed' data={this.state['cumulative']} customClick={ () => this.handleClick('Confirmed') } />
          <Cards type='Active' data={this.state['cumulative']} customClick={ () => this.handleClick('Active') } />
          <Cards type='Recovered' data={this.state['cumulative']} customClick={ () => this.handleClick('Recovered') } />
          <Cards type='Deceased' data={this.state['cumulative']} customClick={ () => this.handleClick('Deceased') } />
          <Cards type='Vaccination' data={this.state['vaccination']} customClick={ () => this.handleClick('Vaccination') } />
        </div>

        <div className='b-example-divider'></div>

        <div className='row g-5'>
          <div className='col-md-10'>
            <h2>Cumulative timeline</h2>
            {/*<BarChart data={ this.state['timeseries'] } size={ [500, 500] } />*/}
            <LineChart data={ API_TIMESERIES['timeseries'] } type={ this.state['sel_col'] } size={ [500, 500] } />
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
