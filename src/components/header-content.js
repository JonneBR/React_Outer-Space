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
    // this.state.asteroids.map((asteroid) => {
    //   console.log(asteroid.sentryId);
    //   console.log(asteroid.fullname);
    //   console.log(asteroid.year_range_min);
    //   console.log(asteroid.year_range_max);
    //   console.log(asteroid.is_active_sentry_object);
    // })
    return(
      <div className="container-table">
        <table className="content-table">
        {/* <header class="header-content"> */}
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
             <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
            <tr class='teste'>
              <td>051214654</td>
              <td>H540GO</td>
              <td>2013</td>
              <td>2019</td>
              <td>True</td>
              <td>F</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Header