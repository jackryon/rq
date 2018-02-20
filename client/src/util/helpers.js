export default function formatDate(d){
  d = new Date(d)
  var mins = (d.getMinutes() < 10 ? '0': '') + d.getMinutes()
  var month = d.getMonth() + 1
  var day = d.getDate()
  return month + '/' + day + '/' + d.getUTCFullYear() +
    ' ' + d.getHours() + ':' + mins
}
