const possibleKillers = {
  'JACOB': ["STEPAN", "VERA"],
  'JACK': ["STEPAN", "ALEX", "MIKE"],
}
const deaded = ["STEPAN", "ALEX"]
const findTheKiller = (_possibleKillers, _deaded) => {
  let detectedKiller;
  Object.keys(_possibleKillers).forEach((currentPossibleKiller) => {
 
  const meetPeople = _possibleKillers[currentPossibleKiller]
  if (detectedKiller) return

  if (_deaded.every(deadMan => meetPeople.includes(deadMan))) {
      detectedKiller = currentPossibleKiller
    }
  })
  return detectedKiller
}

console.log(findTheKiller(possibleKillers, deaded))

