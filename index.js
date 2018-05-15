const form = document.querySelector('#userForm')

const renderColor = function(favoriteColor) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

const renderListItem = function(stringy, stringySpec) {
  const tempItem = document.createElement('li')
  tempItem.textContent = `${stringy}: ${stringySpec}`
  return tempItem
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const nameItem = renderListItem('Name', userName)

  const ageItem = renderListItem('Age', age)

  colorItem = renderColor(favoriteColor)

  const list = document.createElement('ul')
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
