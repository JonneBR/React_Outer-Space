import React from 'react'
import './style.css'

class Navbar extends React.Component{
  render() {
    return (
        <div>
          <ul id="nav">
            <li><a href="myownwebsite">Contact</a></li>
            <li><a href="myownwebsite">About</a></li>
            <li><a href="myownwebsite">FAQ</a></li>
          </ul>
        </div>
    );
}
}
export default Navbar
