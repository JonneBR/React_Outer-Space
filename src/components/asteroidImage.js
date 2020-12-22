import React from 'react'
import asteroid from '../images/asteroid.svg'
import './styles/asteroid.css'

class Asteroid extends React.Component{
  render(){
    return(
      <div class='asteroidImg'>
        <img width="250" src={asteroid} alt=""/>
      </div>
    )
  }
}

export default Asteroid