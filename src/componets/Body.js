import React from 'react'
import "../styles/Body.css"
import Header from '../componets/Header'
import { useStateValue } from '../dataLayer/StateProvider'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{discover_weekly}, dispatch] = useStateValue();

    function playPlayList(id){
        spotify.play({
            context_uri:`spotify:playlist:37i9dQZEVXcTjgI3MrPwhx`
        })
        .then(res => {
            spotify.getMyCurrentPlayingTrack().then(response => {
                dispatch({
                    type:"SET_ITEM",
                    item: response.item
                });
                dispatch({
                    type:"SET_PLAYING",
                    item: true
                });
            });
        });
    }

    function playSong(id){
        console.log(id);
        spotify.play({
            uris: [`spotify:tack:${id}`]
        })
        .then(res => {
            alert("yess")
            spotify.getMyCurrentPlayingTrack().then(response => {
               
                dispatch({
                    type:"SET_ITEM",
                    item: response.item
                });
                dispatch({
                    type:"SET_PLAYING",
                    item: true
                });
            });
        });
    }

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0] ? discover_weekly?.images[0].url : "data:image/jpeg;base64,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"} alt="discover weekly" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description ? discover_weekly?.description : "description" }</p>
                </div>
            </div>
            <div className="body__songs">
                     <div className="body__icons">
                        <PlayCircleFilled className="body__shuffle" onClick={playPlayList} />
                        <Favorite  fontSize="large"/>
                        <MoreHoriz/>
                     </div>
                     {discover_weekly?.tracks.items.map((item) => (
                         <SongRow playSong={playSong} track={item.track}/>
                     ))}
                </div>
        </div>
    )
}

export default Body
