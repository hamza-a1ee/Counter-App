
import './style.css'
import { counter,addToListen } from '../components/Counter.js'

const root = document.querySelector('section.root')

const container = () => {
    const element = document.createElement('div')
    element.classList.add('container-sm')
    element.innerHTML = `
    <div class="row">
    <div class="col-12">
    <h1 class="display-1 mt-5">Counterx</h1></div></div>`
    element.appendChild(counter())

    
    return element
}

root.appendChild(container())

addToListen()

export {root, container}

 










