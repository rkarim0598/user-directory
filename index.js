const button = document.querySelector('button.greeting')

function changeText() {
    //const muhParagraph = document.querySelector('p.greeting')
    //muhParagraph.textContent = "I must not fear"
    const muhHeader = document.querySelector('#header2')
    const muhtext = document.querySelector('input')
    const texty = muhtext.value
    console.log(texty)
    muhHeader.textContent = texty
}

button.addEventListener('click', changeText)

// Homework
// MAKE BUTTON CHANGE TEXT OF HEADING (THE <H1>) -- check!
// ADD MULTIPLE HEADINGS TO THE PAGE AND MAKE THE BUTTON CHANGE THE SECOND ONE -- check!
// SUPER MEGA BONUS: ADD A FORM TO THE PAGE -- check
// ADD A TEXT INPUT TO THE FORM -- check
// UPDATE HEADING WITH THE TEXT THAT YOU TYPE IN THE TEXT INPUT WHEN FORM IS SUBMITTED -- check
// 