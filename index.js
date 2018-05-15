
function changeText() {
    const users = document.querySelector('#users')
  
    const muhtext = document.querySelector('input')
    users.textContent += ' ' + muhtext.value
    muhtext.value = ''
}

document.getElementById('formie').addEventListener("submit", function(event) {
    event.preventDefault()
    changeText()
})

// Homework
// MAKE BUTTON CHANGE TEXT OF HEADING (THE <H1>) -- check!
// ADD MULTIPLE HEADINGS TO THE PAGE AND MAKE THE BUTTON CHANGE THE SECOND ONE -- check!
// SUPER MEGA BONUS: ADD A FORM TO THE PAGE -- check
// ADD A TEXT INPUT TO THE FORM -- check
// UPDATE HEADING WITH THE TEXT THAT YOU TYPE IN THE TEXT INPUT WHEN FORM IS SUBMITTED -- check
// 