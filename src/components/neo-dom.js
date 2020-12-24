import getNeos from './api-request'

async function LoadNeos(){
let neoJson = await getNeos()
console.log(neoJson);

// let neoJson = await getNeos()
// neoJson.forEach(neo =>{
//   console.log(neo);
// })
}

export default LoadNeos()