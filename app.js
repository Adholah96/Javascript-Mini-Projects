const list = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  displayList()
  input.value = ''
})

const displayList = () => {
  inputValue = input.value
  if (inputValue === '') {
    return
  } else {
    const itemLi = document.createElement('li')
    itemLi.textContent = inputValue
    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'X'
    itemLi.append(' ', deletebtn)
    list.append(itemLi)
  }
}

list.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    e.target.closest('LI').remove()
  }
})
