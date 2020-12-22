import React from 'react'
import './styles/style.css'

class Navbar extends React.Component{
  render() {
    return (
        <header class='doidera'>
        <i class="fa fa-rocket"></i>
          <nav>
          <ul id='nav'class="nav">
            <li><a href="myownwebsite">Contact</a></li>
            <li><a href="myownwebsite">About</a></li>
            <li><a href="myownwebsite">FAQ</a></li>
          </ul>
          </nav>
        </header>
    );
}
}
export default Navbar
