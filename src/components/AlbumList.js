import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return new Error('Problem getting data from url');
      })
      .then(data => {
        this.setState({ albums: data });
        console.log(this.state.albums);
      })
      .catch(error => {
        alert(
          `There has been a problem with your fetch operation: ${error.message}`
        );
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
