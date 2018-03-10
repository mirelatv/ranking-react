import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './css/Canciones.css';

class Canciones extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
            <div className="card-list">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">Canción 1
                <span>
                {' '}
                Rate:
                {' '}
                {value}
                 </span>
                 {' '}
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                </li>
                <li className="list-group-item list-group-item-dark">Canción 2</li>
                <li className="list-group-item list-group-item-dark">Canción 3</li>
                <li className="list-group-item list-group-item-dark">Canción 4</li>
              </ul>
            </div>
    );
  }
}

Canciones.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Canciones;