import React from 'react'
import { Link } from 'wouter'
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className="header__logo">
          <Link href='/'>
              <img src={logo} alt='Logo'/>
          </Link>
        </div>
      </div>
    </header>
  )
}
