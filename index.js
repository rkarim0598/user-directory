const form = document.querySelector('#userForm')
const muhList = []
var ncolor = 000099
factor = 10
const loopy = function() {
  document.bgColor = '#' + ncolor
  console.log('hi')
  if (ncolor >= 16777215) {
    factor = -10
  }
  if (ncolor < 000099) {
    factor = 10
  }
  
  ncolor = ncolor + factor
  console.log(ncolor)
  console.log(document.bgColor)
  
 document.bgColor = '#' + ncolor
 loopID = setTimeout("loopy()", 10)
}
loopy()

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

const MONGOL_MONTAGE_YAAAAAA = function() {
  const muhFrame = document.createElement('iframe')
  muhFrame.src = "https://youtube.com/embed/ofFCb2modMk?autoplay=1&loop=1&playlist=ofFCb2modMk"
  muhFrame.width="560"
  muhFrame.height="315"
  muhFrame.allowFullscreen
  muhFrame.frameBorder="0"
  return muhFrame
}
const renderList = function(f) {
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const nameItem = renderListItem('Name', userName)
  const ageItem = renderListItem('Age', age)
  const colorItem = renderColor(favoriteColor)
  
  const muhFrame = MONGOL_MONTAGE_YAAAAAA()
// <iframe width="560" height="315" src="https://www.youtube.com/embed/JE37e1eK2mY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  const tempList = document.createElement('ul')
  var i;
  for (i = 0; i < muhList.length; i++) {
    tempList.appendChild(muhList[i])
  }
  tempList.appendChild(muhFrame)
  return tempList
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

 

  const list = renderList(f)
  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
