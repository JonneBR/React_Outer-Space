import React from 'react'
import LoadNeos from './neo-dom'

class renderNeos extends React.Component{
render(){
  const neosData = async () => {
    const neos = await LoadNeos
  
    const renderNeos = await Promise.all(
      neos.map((n) => {
        <li>Satélite({n})</li>
        // console.log(n);
      })
    )
    }
}

return (
  {neosData}
)
}

export default renderNeos