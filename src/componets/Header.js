import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import "../styles/Header.css"
import { useStateValue } from '../dataLayer/StateProvider'

function Header() {

    const [{user}] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <Search/>
                <input type="text" placeholder="Search for Songs or Podcasts"/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
