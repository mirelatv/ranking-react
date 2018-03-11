import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Slide extends Component {
  render() {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={this.props.songs[this.props.actualId].picture} alt={this.props.songs[this.props.actualId].name} />
        </div>
      </div>
    )
  }
}

export default Slide;
