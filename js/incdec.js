function incDec(){
    const inc = document.querySelector('.inc'),
    dec = document.querySelector('.dec'),
     zero = document.querySelector('.zero')
     

let count = 0
    
function increment(){
    if(count < 10){
        count++
        zero.innerText = count
    }
}
    
function decrement(){
    if(count > 0){
        count--
        zero.innerText = count
    }
}
inc.addEventListener('click', increment)
dec.addEventListener('click', decrement)

}

incDec()