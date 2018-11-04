import React, { Component } from 'react';
import './App.css';
import Spotify from '.../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.searchResults = {name: 'EK Track', artist: 'Emad Khan', album: 'Khan Hits', id: 123};
    this.state.playlistName = 'This is a sample name';
    this.state.playlistTracks = {name: 'EK Track', artist: 'Emad Khan', album: 'Khan Hits', id: 123};
    this.state.addTrack = this.state.addTrack.bind(this);
    this.state.removeTrack = this.state.removeTrack.bind(this);
    this.state.updatePlaylistName = this.state.updatePlaylistName.bind(this);
    this.state.savePlayList = this.state.savePlayList.bind(this);
    this.state.search = this.state.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else {this.setState.playlistTracks({name: track.name, artist: track.artist, album: track.album, id: track.id})}
  }

  removeTrack(track) {
    this.setState({
      id: this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState ({name: name})
  }

  savePlayList(playlistName, trackURIs) {
    Spotify.savePlaylist(playlistName, trackURIs);
      this.setState.playlistName = 'New Playlist';
      this.setState.playlistTracks = [];
  }

  search(term) {
    Spotify.search(term).then(track => {
      this.setState.searchResults = ({name: track.name, artist: track.artist, album: track.album, id: track.id})
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlayList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
