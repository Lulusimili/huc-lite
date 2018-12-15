const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const todayInfo = () => {
  var todayInfo = Date.parse(new Date())
  todayInfo = todayInfo / 1000
  todayInfo = parseInt((todayInfo - 1540742400)/86400)
  todayInfo = todayInfo % 7
  return todayInfo
}
module.exports = {
  formatTime: formatTime,
  todayInfo: todayInfo
}
