Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const result = []
    for (let i = 0; i < promises.length; i++) {
      promises[i]()
        .then(value => {
          result.push({ promiseId: i, value, error: null })
        })
        .then(() => {
          if (i === promises.length - 1) resolve(result)
        })
        .catch(error => {
          result.push({ promiseId: i, value: null, error })
          reject(result)
        })
    }
  })
}

function fetchData() {
  return new Promise((resolve, reject) => {
    const randoms = {
      0: ["a", "b"],
      1: ["o", "c"],
    }
    const getRandomData = () => {
      return randoms[Math.round(Math.random())]
    }
    const randomReject = () => {
      return Boolean(Math.round(Math.random()))
    }

    setTimeout(() => {
      if (randomReject()) return reject("Something went wrong")
      return resolve(getRandomData())
    }, 2000)
  })
}

Promise.myPromiseAll([fetchData, fetchData, fetchData])
  .then(console.log)
  .catch(console.log)