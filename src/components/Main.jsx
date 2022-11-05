import React, { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import Header from './Header'
// import img1 from '../../public/iamges/Home.png'

function Main() {
    const [home, setHome] = useState(true)
    const [profile, setProfile] = useState(false)
    const hanldeHomeScreen = () => {
        setHome(true)
        setProfile(false)
    }

    const hanldeProfileScreen = () => {
        setHome(false)
        setProfile(true)
    }
    return (
        <>
            <div className="">
                
                <div className="main-container">
                    <div className="sidenav">
                        <div className='home-page sidenav-page' onClick={hanldeHomeScreen}>
                            <img className='home-img' src='./images/Home.png' alt=''/>
                        </div>
                        <div className='Profile-page sidenav-page' onClick={hanldeProfileScreen}>
                            <img className='profile-img' src='./images/Profile.png' alt=''/>
                        </div>
                    </div>
                    <div className="">
                        {home &&
                            <Home/>}
                        {profile &&
                            <Profile />}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Main