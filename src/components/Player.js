import React, { Component } from 'react';
import SongsList from './SongsList';

class Player extends Component {
  constructor() {
    super()
    this.state = {
      songs: [
        {id: 1, name: 'Canción 1', votes: 25},
        {id: 2, name: 'Canción 2', votes: 15},
        {id: 3, name: 'Canción 3', votes: 10},
        {id: 4, name: 'Canción 4', votes: 3},
        {id: 5, name: 'Canción 5', votes: 1}
      ]
    }
  }

  render() {
    return (
      <SongsList songs={this.state.songs} />
    )
  }
}

export default Player;