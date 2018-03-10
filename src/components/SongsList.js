import React, { Component } from 'react';
import Song from './Song';

class SongsList extends Component {

  render() {
    return (
      <div className="list-group text-left">
        {this.props.songs.map(song =>
          <Song key={song.id} {...song}/>
        )}
      </div>
    )
  }
}

export default SongsList;