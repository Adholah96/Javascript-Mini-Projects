const timer = document.querySelector('.timer')
const start = document.querySelector('.start')
const stopTimer = document.querySelector('.stop')
const restart = document.querySelector('.restart')
let ms = 0,
  s = 0,
  m = 0
let counter
const run = () => {
  timer.textContent = m + ':' + s + ':' + ms
  ms++
  if (ms === 100) {
    ms = 0
    s++
    if (s === 60) {
      s = 0
      m++
    }
  }
}
start.addEventListener('click', () => {
  if (!counter) {
    counter = setInterval(run, 10)
  }
})
stopTimer.addEventListener('click', () => {
  clearInterval(counter)
  counter = false
})
restart.addEventListener('click', () => {
  clearInterval(counter)
  counter = false
  ;(ms = 0), (s = 0), (m = 0)
  timer.textContent = m + ':' + s + ':' + ms
})
