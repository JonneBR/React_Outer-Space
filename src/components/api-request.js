async function getNeos(){
  const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY',)
  const result = await response.json()
  console.log(result['sentry_objects']);
  return result['sentry_objects']

}

export default getNeos()