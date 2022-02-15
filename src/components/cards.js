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
    let sel = (this.props.type === this.props.sel) ? 'selected' : ''
    if(this.props.type === 'Vaccination') {
      // Vaccination card
      let vacc_data = this.calc_vacc_data(this.props.data)
      let up_down = (vacc_data['delta'] <= 0) ? 'delta-down' : 'delta-up'

      return (
        <div id="vaccination" className={"feature col " + sel} onClick={ this.props.customClick }>
          <h2>Vaccination</h2>
          <h4>{vacc_data['latest']}</h4>
          <span className={up_down}>{Math.abs(vacc_data['delta'])}</span>
        </div>
      )
    } else {
      // Confirmed, Active, Deceased & Recovered type of cards
      let dtype = this.props.type
      let dcum = this.props.data
      let delta = `Delta_${dtype}`
      let up_down = (dcum[delta] <= 0) ? 'delta-down' : 'delta-up'
      return (
        <div id={dtype.toLowerCase()} className={"feature col " + sel} onClick={ this.props.customClick }>
          <h2>{dcum[dtype]}</h2>
          <h4>{dtype}</h4>
          <span className={up_down}>{Math.abs(dcum[delta])}</span>
        </div>
      )
    }
  }
}

export default Cards