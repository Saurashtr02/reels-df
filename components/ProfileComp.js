import React from 'react'
import Navbar from 'components/Navbar'


function ProfileComp() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <div className='profile-details'>
                <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' height={'250'} width={'250'} style={{
                    borderRadius:'50%'
                }} ></img>
                <div className='dpname' style={{flexBasis:'40%', textAlign:'center'}}>
                    <h1>Name</h1>
                    <h3>
                        Posts:10
                    </h3>
                </div>
            </div>

          <hr></hr>

            <div className='profile-vids'>
                <video></video>
                <video></video>
                <video></video>
                <video></video>
                <video></video>
                <video></video>
            </div>
        </div>

    </div>
  )
}

export default ProfileComp