import React from 'react'
import './style.css'

class Navbar extends React.Component{
  render() {
    return (
        <div>
          <ul id="nav">
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
    );
}
}
export default Navbar
