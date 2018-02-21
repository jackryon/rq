export var formatDate = (d) => {
  d = new Date(d)
  var mins = (d.getMinutes() < 10 ? '0': '') + d.getMinutes()
  var month = d.getMonth() + 1
  var day = d.getDate()
  return month + '/' + day + '/' + d.getUTCFullYear() +
    ' ' + d.getHours() + ':' + mins
}

export var getSpeedFromPace = (pace) => {
  var paceArray = pace.split(':')
  var mins = parseInt(paceArray[0])
  var secs = parseInt(paceArray[1])
  return mins + (secs/60)
}

export var calculateRQ = (speed, heartRate) => {
  return (speed/heartRate) * 1000
}

export var postRQ = (rQ, date, callback) => {
  fetch(process.env.REACT_APP_API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ rQ: rQ, date: date }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => {
    return result.json()
  }).then(data => {
    if(data.errors) throw data.message
  })
}

export var getRQ = (scope, callback) => {
  fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(result => {
      return result.json()
    })
    .then(data => {
      callback.call(scope, JSON.parse(data))
    })
}
