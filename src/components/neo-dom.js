import getNeos from './api-request'
import Neo from './neo'

async function LoadNeos(){
  let neos = []
  let neoJSON = await getNeos()
  console.log(neoJSON);
  neoJSON.forEach(neo =>{
    let neoInformations = new Neo(
      neo['sentryId'],
      neo['fullname'],
      neo['year_range_min'],
      neo['year_range_max'],
      neo['is_active_sentry_object']
    )
    neos.push(neoInformations)
    
  })
  return neos
  // renderElements(neos)
  // console.log(neos);
}

function renderElements(neos){
}

export default LoadNeos()