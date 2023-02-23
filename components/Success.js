
const msgs = ['lush ha na app', 'achi lagi?', 'mujha tou achi lagi.', 'ab kch change na karwana baris mushkil sa bani ha', 'bs MashAllah bolo.']
const Success = (index=0) => {
  const element = document.createElement('div')
  element.classList.add('container')

  console.log(element)
  element.innerHTML = `
    <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
    <div class="alert alert-success" role="alert">
  ${msgs[index]}
</div></div></div>
    `
  return element

}

const checkLimit=(count,status)=>{

  if(count>5){
    count=0
    return count
  }
  else if(count<0){
    count=0
    return count
  }
  else{
    if(status=='increment'){
      count+=1
      return count
    }
    else{
      count-=1
      return count
    }
  }
}

export { Success , checkLimit }
export { msgs }