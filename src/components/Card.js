import React from 'react'

class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <img src={this.props.src} alt={this.props.alt} className="test card-image inline-block"/>
        <div className="test card-text inline-block">{this.props.text}</div>
      </div>
    )
  }
}

export default Card;