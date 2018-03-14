export var httpHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export let validateEmail = (email) => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}

export let formatDate = (d) => {
  d = new Date(d)
  var mins = (d.getMinutes() < 10 ? '0': '') + d.getMinutes()
  var month = d.getMonth() + 1
  var day = d.getDate()
  return month + '/' + day + '/' + d.getUTCFullYear() +
    ' ' + d.getHours() + ':' + mins
}

export let getSpeedFromPace = (pace) => {
  var paceArray = pace.split(':')
  var mins = parseInt(paceArray[0], 10)
  var secs = parseInt(paceArray[1], 10)
  return 60 / (mins + (secs/60))
}

export let calculateRQ = (speed, heartRate) => {
  return (speed/heartRate) * 1000
}
