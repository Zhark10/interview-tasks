function rememberTheOrderOfVisitedCity(routes) {
	let orderOfVisitedCity = []
  
  const firstCity = routes.reduce((detectedFirstCity, route, index, array)=>{ 
  	const startPoint = route[0]
    let includedRoutes = 0
    
    array.forEach((currentRoute)=>{
    	if (currentRoute.some(el => el === startPoint)) {
      	includedRoutes += 1
      }
    })
    
    return (includedRoutes === 1) ? route : detectedFirstCity
  }, null)
  
  
  orderOfVisitedCity.push(firstCity[0])

	const result = routes.reduce((result, currentRoute, index, array) => {
    const finishCityByPrevRoute = result[result.length - 1]
    
    array.forEach(city => {
    	const startCityByRoute = city[0]
    	if (finishCityByPrevRoute === startCityByRoute) {
      	result.push(city[1])
      }
    })
    
    return result
  }, orderOfVisitedCity)
  
  return result.join(', ')
}

console.log(rememberTheOrderOfVisitedCity([
  ["MNL", "TAG"], // 1
  ["CEB", "TAC"], // 3
  ["TAG", "CEB"], // 2
  ["TAC", "BOR"], // 4
])); // "MNL, TAG, CEB, TAC, BOR"

console.log(rememberTheOrderOfVisitedCity([
  ["Chicago", "Winnipeg"], // 4
  ["Halifax", "Montreal"], // 1
  ["Montreal", "Toronto"], // 2
  ["Toronto", "Chicago"],  // 3
  ["Winnipeg", "Seattle"], // 5
])); // "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"

console.log(rememberTheOrderOfVisitedCity([
  ["USA","BRA"], // 1
  ["JPN","PHL"], // 4
  ["BRA","UAE"], // 2
  ["UAE","JPN"], // 3
])); // "USA, BRA, UAE, JPN, PHL"
