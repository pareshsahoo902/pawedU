import React from 'react'
import "../components/Header.css"
import Logo from '../assets/pawed_logo.png'
import ProfileIcon from '@material-ui/icons/AccountCircleRounded';
import IconButton from '@material-ui/core/IconButton'
import ChatIcon from '@material-ui/icons/ForumRounded';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <ProfileIcon fontSize='large' className='headerIcon'/>
            </IconButton>

            <img 
                src={Logo}
                className="headerlogo"
                alt=""
            />


            <IconButton>
                <ChatIcon fontSize='large' className='headerIcon'/>
            </IconButton>
        </div>
    )
}

export default Header
