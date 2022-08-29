import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='app'>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a id="myDiv" href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header