const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const color = f.favoriteColor.value
//   const age = f.age.value
//   users.innerHTML += `<p>${userName}, ${age}</p>`

  // da complicated way that is better
  const p = document.createElement('p')
  p.textContent = `${userName}, ${age}`
  p.style.backgroundColor = color
  users.appendChild(p)
  f.reset()
  f.userName.focus()
//   document.body.style.backgroundColor = color;
//   document.color = color;
//   document.bgColor = color;

}

form.addEventListener('submit', handleSubmit)
