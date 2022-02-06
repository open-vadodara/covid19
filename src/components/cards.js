import React from 'react'

class Cards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={this.props.type.toLowerCase()} className="feature col">
        <h2>{this.props.type}</h2>
        <h4>{this.props.data.cumulative}</h4>
        <span>{this.props.data.delta}</span>
      </div>
    )
  }
}

export default Cards