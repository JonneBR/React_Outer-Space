import React from 'react'

const renderNeos = (props) => {
  return(
    <tr class='teste'>
      <td>{props.sentryId}</td>
      <td>{props.fullname}</td>
      <td>{props.year_range_min}</td>
      <td>{props.year_range_max}</td>
      <td>True</td>
    </tr>
  )
}
export default renderNeos