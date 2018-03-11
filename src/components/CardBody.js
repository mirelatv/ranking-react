import React, { Component } from 'react'
import SongsList from './SongsList'

class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <SongsList songs={this.props.songs} />
      </div>
    )
  }
}

export default CardBody;