import React from 'react';
import Cards from './components/cards';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    // default states
    this.state = {
      selected: 'Confirmed'
    }
  }

  render() {
    return (
      <div class="container px-4 py-5" id="featured-5">
        <div id='topcards' className="row g-4 py-5 row-cols-1 row-cols-lg-5">
          <Cards type='Confirmed' data={{'cumulative': 123, 'delta': 3}} />
          <Cards type='Active' data={{'cumulative': 345, 'delta': 4}} />
          <Cards type='Recovered' data={{'cumulative': 798, 'delta': 9}} />
          <Cards type='Deceased' data={{'cumulative': 532, 'delta': 3}} />
          <Cards type='Vaccinated' data={{'cumulative': 654, 'delta': 5}} />
        </div>

        {/* Other html components */}
      </div>
    )
  }
}

export default App;
