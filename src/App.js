import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      <div className="App">
        <div className="container mt-3">
          <div className="card text-white bg-dark">
            <div className="card-header">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="assets/images/defaultimg.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/images/defaultimg.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/images/defaultimg.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
            </div>
            <div className="card-body">
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
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default App;
