import React from 'react'
import './styles/header-content.css'

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <table className="table-content">
        {/* <header class="header-content"> */}
        <thead class='testando'>
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
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Header