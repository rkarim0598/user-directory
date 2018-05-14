const button = document.querySelector('button.greeting')

function changeText() {
    const muhParagraph = document.querySelector('p.greeting')
    muhParagraph.textContent = "I must not fear"
}

button.addEventListener('click', changeText)


