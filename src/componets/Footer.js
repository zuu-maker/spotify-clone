import React, { useEffect } from 'react'
import "../styles/Footer.css"
import PlayCircleOutLineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'
import { PauseCircleOutline, VolumeDown } from '@material-ui/icons'
import { useStateValue } from '../dataLayer/StateProvider'


function Footer({spotify}) {

    const [{ playing }, dispatch] = useStateValue()

    useEffect(() => {
        spotify.getMyCurrentPlaybackState()
        .then(res => {
            dispatch({
                type: "SET_PLAYING",
                playing: res.is_playing,
              });
        
              dispatch({
                type: "SET_ITEM",
                item: res.item,
              });
        })
    },[spotify, dispatch]);

    function handlePausePlay(id){
        if(playing){
            spotify.pause()
                dispatch({
                    type:"SET_PLAYING",
                    playing: false
            });
        }else{
            spotify.play()
                dispatch({
                    type:"SET_PLAYING",
                    playing: true
            });
        }
    }

    function skipNext(){
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack()
        .then(res => {
            dispatch({
                type:"SET_ITEM",
                item: res.item
            })
            dispatch({
                type:"SET_PLAYING",
                playing: true
            })
        })
    }

    function skipPrevious(){
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack()
        .then(res => {
            dispatch({
                type:"SET_ITEM",
                item: res.item
            })
            dispatch({
                type:"SET_PLAYING",
                playing: true
            })
        })
    }
   
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt="album-logo" />
                <div className="footer__songInfo">
                    <h4>Teach Me</h4>
                    <p>Headie One</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon" onClick={skipPrevious}></SkipPreviousIcon>
               {playing ? <PauseCircleOutline fontSize="large" className="footer__green" onClick={handlePausePlay}></PauseCircleOutline> :<PlayCircleOutLineIcon fontSize="large" className="footer__green" onClick={handlePausePlay} ></PlayCircleOutLineIcon>} 
                <SkipNextIcon className="footer__icon" onClick={skipNext} ></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                         <VolumeDown/>
                    </Grid>
                    <Grid item xs>
                         <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer 