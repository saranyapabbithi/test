import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'


 function Header() {
  return (
    <div  className='menu'>
      <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>Sales</li></Link>
      <Link to='/services'><li>Services</li></Link>
      <Link to='/contact'><li>Contact</li></Link>
      <Link to='/counter'><li>Counter</li></Link>
      <Link to='/counter1'><li>Counter1</li></Link>
      </ul>     
    </div>
  )
}
export default Header
