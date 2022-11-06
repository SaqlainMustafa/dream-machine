import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/' className='logo'>Logo</Link>
      </div>
      <div className="header-sidenav header-sidenav-display">
        <div className='home-page header-sidenav-page'>
          <Link to='/'><svg className='home-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 22V12H15V22" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg></Link>
        </div>
        <div className='Profile-page header-sidenav-page'>
          <Link to='/profile'><svg className='profile-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z" stroke="#B5B5B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z" stroke="#B5B5B5" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
          </svg></Link>
        </div>
      </div>
    </header>
  )
}

export default Header