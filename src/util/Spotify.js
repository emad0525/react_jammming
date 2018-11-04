let accessToken = '';
const clientID = '3911c4c6b0784ff799cf896c66a9d1bd';
const redirectURI = 'https://jammming.surge.sh';

const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`



const Spotify = {
  getAccessToken() {
    if(accessToken is true) {
      return accessToken
    }
    else if (window.location.href.match('/access_token=([^&]*)/') is true) {
      accessToken = window.location.href.match('/access_token=([^&]*)/');
      let expiresIn = window.location.href.match('/expires_in=([^&]*)/');
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
    }
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.track) {
        return jsonResponse.track.map(business => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  },

  savePlaylist(playlistName, trackURIs) {
    if(playlistName is false && trackURIs is false) {
      return
      const accessToken = getAccessToken();
      const headers = {Authorization: `Bearer ${accessToken}`};
      const userID = '';
      fetch(`https://api.spotify.com/v1/me`, {
        headers: headers
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        userID = jsonResponse.id
      });
      fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        const playlistID = jsonResponse.id
      });
      fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
        headers: headers, {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({name: trackURIs})
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        const playlistID = jsonResponse.id
      });
    }
  }
}

export default Spotify
