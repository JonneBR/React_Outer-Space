import React from 'react'
import './styles/header-content.css'
import RenderNeos from './renderNeos'


async function getNeos(){
  const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY',)
  const result = await response.json()
  return result
}


class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      asteroids: []
    }
  }
  componentDidMount(){
    getNeos().then(result => {
      this.setState(state => ({
        asteroids: result['sentry_objects']
      }))
    })
  }
  render(){
    return(
      <div className="container-table">
        <table className="content-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Min Year</th>
            <th>Max Year</th>
            <th>Is Sentry</th>
          </tr>
        </thead>
        <tbody>
        {this.state.asteroids.map((asteroid) => 
             <RenderNeos
             sentryId = {asteroid.sentryId}
             fullname = {asteroid.fullname}
             year_range_min = {asteroid.year_range_min}
             year_range_max = {asteroid.year_range_max}
             is_active_sentry_object = {asteroid.is_active_sentry_object}
             />
        )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Header