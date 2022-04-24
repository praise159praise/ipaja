import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
          <Link to='/' className='link'> <div > Home </div></Link>
          <Link to='/aboutus' className='link'> <div > About AYD </div></Link>

    </div>
  )
}

export default Nav