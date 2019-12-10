import React from 'react'
import '../styles/componentStyles/Card.css'

class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <img src={this.props.src} alt={this.props.alt} className="test card-image"/>
        <div className="card-title">
          <h4>{this.props.title}</h4>
          <p>{this.props.desc}</p>
        </div>
      </div>
    )
  }
}

export default Card;