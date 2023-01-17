import React from 'react'
import Navbar from '../components/Navbar'
import Ubutton from './Ubutton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';



function Feed() {
  return (
    <div className='feed-container'>
        <Navbar></Navbar>
        <Ubutton></Ubutton>
        <div className='videos-cont'>
            <div className='post-cont'>
                <video />
                <div className='vid-info'>
                    <div className='profile-info'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    <p>Name</p>
                    </div>
                    <div className='likes'>
                        <FavoriteIcon ></FavoriteIcon>
                        12
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed