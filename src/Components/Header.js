import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'


 function Header() {
  return (
    <div>
      <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/services'><li>Services</li></Link>
      <Link to='/contact'><li>Contact</li></Link>
      </ul>     
    </div>
  )
}
export default Header