import React from 'react'
import "../../components/HomePage/Footer.css"
import IconButton from '@material-ui/core/IconButton'
import Relay from "@material-ui/icons/Replay"
import Close from "@material-ui/icons/Close"
import Star from "@material-ui/icons/StarRate"
import Flash from "@material-ui/icons/FlashOn"
import Favorite from "@material-ui/icons/Favorite"

function Footer() {
    return (
        <div className="swipeButtons">

            <IconButton>
                <Relay fontSize='large' className='icon_relay'/>
            </IconButton>
            <IconButton>
                <Close fontSize='large' className='icon_close'/>
            </IconButton>
            <IconButton>
                <Star fontSize='large' className='icon_star'/>
            </IconButton>
            <IconButton>
                <Favorite fontSize='large' className='icon_favorite'/>
            </IconButton>
            <IconButton>
                <Flash fontSize='large' className='icon_flash'/>
            </IconButton>
            
            
        </div>
    )
}

export default Footer
