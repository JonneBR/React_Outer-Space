import React from 'react'
import asteroid from '../images/asteroid.svg'

class Asteroid extends React.Component{
  render(){
    return(
      <div>
        <img width="350" src={asteroid} alt=""/>
      </div>
    )
  }
}

export default Asteroid