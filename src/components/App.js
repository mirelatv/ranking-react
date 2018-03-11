import React, { Component } from 'react'
import CardBody from './CardBody'
import Slide from './Slide'
import './css/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [
        {id: 0, name: 'Canción 1', votes: 25, picture: 'assets/images/defaultimg.jpg'},
        {id: 1, name: 'Canción 2', votes: 15, picture: 'assets/images/defaultimg.jpg'},
        {id: 2, name: 'Canción 3', votes: 10, picture: 'assets/images/defaultimg.jpg'},
        {id: 3, name: 'Canción 4', votes: 3, picture: 'assets/images/defaultimg.jpg'}
      ],
      actualId: 0
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container my-4">
          <div className="row">
            <div className="card text-white bg-dark col-10 offset-1 col-lg-8 offset-lg-2">
              <div className="card-header">
                <h1 className="center-text">Ranking React</h1>
                <div id="carouselRanking" className="carousel slide" data-ride="carousel" data-interval="false">

                  <Slide songs={this.state.songs} actualId={this.state.actualId}/>

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
              <CardBody songs={this.state.songs}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
