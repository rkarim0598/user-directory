const form = document.querySelector('#userForm')
const muhList = []

const renderColor = function(favoriteColor) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
  colorItem.appendChild(colorDiv)
  muhList.push(colorItem)
  return colorDiv
}

const renderListItem = function(stringy, stringySpec) {
  const tempItem = document.createElement('li')
  tempItem.textContent = `${stringy}: ${stringySpec}`
  muhList.push(tempItem)
  console.log(muhList)
  return tempItem
}

const renderList = function() {
  const tempList = document.createElement('ul')
  var i;
  for (i = 0; i < muhList.length; i++) {
    tempList.appendChild(muhList[i])
  }
  return tempList
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const nameItem = renderListItem('Name', userName)
  const ageItem = renderListItem('Age', age)
  const colorItem = renderColor(favoriteColor)

  const list = renderList()
  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
