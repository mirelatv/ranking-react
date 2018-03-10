import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Song.css';

class Song extends Component {

  render() {
    return (
    <li className="list-group-item list-group-item-dark d-inline-flex align-items-center justify-content-between song-item">
        <span>{this.props.name}</span>
        <span>{this.props.votes}</span>
        <span>
          <button className="btn btn-outline-light mr-2"><i className="fas fa-plus"></i>
          </button>
          <button className="btn btn-outline-light"><i className="fas fa-minus"></i>
          </button>
        </span>
    </li>)
  }
}

Song.propTypes = {
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
}

export default Song;