const button = document.querySelector('button.greeting')

function changeText(ev) {
    //const muhParagraph = document.querySelector('p.greeting')
    //muhParagraph.textContent = "I must not fear"
    ev.target.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)


