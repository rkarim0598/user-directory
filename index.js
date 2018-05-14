const button = document.querySelector('button.greeting')

function changeText() {
    //const muhParagraph = document.querySelector('p.greeting')
    //muhParagraph.textContent = "I must not fear"
    const muhHeader = document.querySelector('#header1')
    muhHeader.textContent = "He who controls the spice, controls the Universe"
}

button.addEventListener('click', changeText)

// Homework
// MAKE BUTTON CHANGE TEXT OF HEADING (THE <H1>) -- check!
// ADD MULTIPLE HEADINGS TO THE PAGE AND MAKE THE BUTTON CHANGE THE SECOND ONE
// SUPER MEGA BONUS: ADD A FORM TO THE PAGE
// ADD A TEXT INPUT TO THE FORM
// UPDATE HEADING WITH THE TEXT THAT YOU TYPE IN THE TEXT INPUT WHEN FORM IS SUBMITTED
// 