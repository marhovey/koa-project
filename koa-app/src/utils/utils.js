export function dateFormat(time) {
  let date = new Date(time * 1);
  let year = date.getFullYear();
  let mon = addZero(date.getMonth())
  let day = addZero(date.getDay())
  let h = addZero(date.getHours())
  let min = addZero(date.getMinutes())
  let sec = addZero(date.getSeconds())
  return `${year}-${mon + 1}-${day} ${h}:${min}:${sec}`
}

function addZero(num) {
  if (num > 9) {
    return num
  }
  return `0${num}`
}