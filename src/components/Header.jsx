import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/' className='logo'>Logo</Link>
      </div>
    </header>
  )
}

export default Header