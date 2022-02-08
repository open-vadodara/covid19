import React from 'react'

class Cards extends React.Component {
  constructor(props) {
    super(props)

    this.calc_vacc_data = this.calc_vacc_data.bind(this)
  }

  calc_vacc_data(vacc) {
    return {
      'latest': vacc[vacc.length - 1]['total_vaccinations'],
      'delta': vacc[vacc.length - 1]['total_vaccinations'] - vacc[vacc.length - 2]['total_vaccinations']
    }
  }

  render() {
    if(this.props.type === 'Vaccination') {
      // Vaccination card
      let vacc_data = this.calc_vacc_data(this.props.data)
      return (
        <div id="vaccination" className="feature col">
          <h2>Vaccination</h2>
          <h4>{vacc_data['latest']}</h4>
          <span>{vacc_data['delta']}</span>
        </div>
      )
    } else {
      // Confirmed, Active, Deceased & Recovered type of cards
      let dtype = this.props.type
      let dcum = this.props.data
      let delta = `Delta_${dtype}`

      return (
        <div id={dtype.toLowerCase()} className="feature col">
          <h2>{dtype}</h2>
          <h4>{dcum[0][dtype]}</h4>
          <span>{dcum[0][delta]}</span>
        </div>
      )
    }
  }
}

export default Cards