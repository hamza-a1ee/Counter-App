let count=0
const counter = () => {
    const element = document.createElement('div')
    element.classList.add('row')
    element.innerHTML = `
    <div class="col-12">
    <div class="count-container">
    <button type="button"  id="increment" class="btn btn-primary btn-floating ">+</button>
    <h1 class="display-3 mt-5" id="count-var">0</h1>
    <button type="button"  id="decrement" class="btn btn-rounded btn-primary">-</button>
    </div>
    </div>
    `
    
    
    return element
}

const addToListen=()=>{
    const counter_var = document.getElementById('count-var')
    const increase = document.getElementById('increment')
    increase.addEventListener('click', () => {
        count += 1
        counter_var.innerText = count       })
    const decrease = document.getElementById('decrement')
    decrease.addEventListener('click', () => {
        count -= 1
        counter_var.innerText = count})
}
export { counter,addToListen }



