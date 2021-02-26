import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Player from './pages/Player';
import { getToken } from './spotify/spotify';
import Spotify from 'spotify-web-api-js';
import { useStateValue } from './dataLayer/StateProvider'

const spotify = new Spotify();

function App() {

  const [{ token ,user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getToken();
    console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
       dispatch({
         type:"SET_TOKEN",
         token: _token,
       })

      spotify.setAccessToken(_token);
      
      spotify.getMe()
      .then(user => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists()
      .then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcTjgI3MrPwhx")
      .then(res => {
        dispatch({
          type:"DISCOVER_WEEKLY",
          discover_weekly: res, 
        })
      })

    }
  
  },[token, dispatch])

  console.log(user);
  console.log("token:", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login/> }
    </div>
  );
}

export default App;
