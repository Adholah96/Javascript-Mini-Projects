let hour = window.prompt('Enter the hour ')
let min = window.prompt('Enter the minute ')
let sec = window.prompt('Enter the second')

const currentDate = () => {
  const time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  document.querySelector('.currentTime').textContent =
    hours + ':' + minutes + ':' + ':' + seconds
  document.querySelector('.alarmTime').textContent =
    hour + ':' + min + ':' + sec
  if (hour == hours && min == minutes && sec == seconds) {
    document.querySelector('.alarm').textContent = 'Time is over'
  }

  setTimeout(currentDate, 1000)
}

currentDate()
