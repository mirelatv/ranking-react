import React, { Component } from 'react';
import Player from './components/Player';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="container my-4">
          <div className="row">
            <div className="card text-white bg-dark col-10 offset-1 col-lg-8 offset-lg-2">
              <div className="card-header">
              <h1 className="center-text">Ranking</h1>
                <div id="carouselRanking" className="carousel slide" data-ride="carousel" data-interval="false">
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
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/defaultimg.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselRanking" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselRanking" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <Player />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
