const oportunityKillers = {
  'JACOB': ["STEPAN", "VERA"],
  'JACK': ["STEPAN", "ALEX", "MIKE"],
}
const deaded = ["STEPAN", "ALEX"]
const killer = (_oportunityKillers, _deaded) => {
  let detectedKiller;
  Object.keys(_oportunityKillers).forEach((currentOportunityKiller) => {
 
  const meetPeople = _oportunityKillers[currentOportunityKiller]
  if (detectedKiller) return

  if (_deaded.every(deadMan => meetPeople.includes(deadMan))) {
      detectedKiller = currentOportunityKiller
    }
  })
  return detectedKiller
}

console.log(killer(oportunityKillers, deaded))

