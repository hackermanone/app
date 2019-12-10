import React from 'react'
import '../styles/Portfolio.css'

import Card from '../components/Card'

class PortfolioPage extends React.Component {
  render() {
    return(
      <div className="bg">
        <div className="card-wrapper">
          <Card src={require('../assets/images/images.png')} alt="hahayeet" text="baylife" title="asds"></Card>
        </div>
      </div>
    )
  }
}

export default PortfolioPage;