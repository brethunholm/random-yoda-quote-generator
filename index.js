import {yodaSaid} from './node_modules/yoda-said/index.js';


const result = document.querySelector('.result')
const yodaButton = document.querySelector('.getYoda')



const text = yodaSaid();
console.log(text)


result.innerHTML = yodaSaid()

function handleClick(e) {
    e.preventDefault()
    console.log(e.target)
    result.innerHTML = yodaSaid()
}

function translateToYoda() {
    result.innerHTML = `Hey I'm Yoda!`
}




// Event listeners
yodaButton.addEventListener('click', handleClick)

