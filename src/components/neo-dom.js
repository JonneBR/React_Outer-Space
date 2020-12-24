import getNeos from './api-request'
import Neo from './neo'

async function LoadNeos(){
  let neos = []
  let neoJSON = await getNeos()
  console.log(neoJSON);
  // neoJSON.forEach(neo =>{
  //   let neoInformations = new Neo(
  //     neo['sentryId'],
  //     neo['fullname'],
  //     neo['year_range_min'],
  //     neo['year_range_max'],
  //     neo['is_active_sentry_object']
  //   )
  //   neos.push(neoInformations)
    
  // })
  renderElements(neos)
  console.log(neos);
}

function renderElements(neos){
  // neos.forEach(neo =>{
    // let logo = 'ola'
    // let tr = document.createElement('tr')
    // let id = document.createElement('td')
    // id.innerHTML = '55554'
    // tr.appendChild(id)
 
    //CREATE NEW TD THIS WAY OR THE WAY ABOVE?

    // tr.appendChild(document.createElement("td").innerText.add(neo.id))
    // tr.appendChild(document.createElement("td").innerText.add(neo.name))
    // tr.appendChild(document.createElement("td").innerText.add(neo.year_range_min))
    // tr.appendChild(document.createElement("td").innerText.add(neo.year_range_max))
    // tr.appendChild(document.createElement("td").innerText.add(neo.issentry))
  // })
}

export default LoadNeos()