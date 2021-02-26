import React from 'react'
import "../styles/Player.css"
import Sidebar from '../componets/Sidebar'
import Body from '../componets/Body'
import Footer from '../componets/Footer'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
              {/* player sidebar */}
              <Sidebar/>
              {/* player body */}
              <Body spotify={spotify}/>
            </div>
             {/* player footer */}
             <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
