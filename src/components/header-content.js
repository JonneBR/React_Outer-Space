import React from 'react'
import './styles/header-content.css'

class Header extends React.Component{
  render(){
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
        {/* </header> */}
        <tbody>
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