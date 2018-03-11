import React, { Component } from 'react'
import Slide from './Slide'

class Player extends Component {
  render() {
    return (
      <div id="carouselRanking" className="carousel slide" data-ride="carousel" data-interval="false">
        <Slide songs={this.props.songs} actualId={this.props.actualId}/>

        <a className="carousel-control-prev" href="#carouselRanking" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselRanking" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
    )
  }
}

export default Player;