function mobileSlider(){
    const right1Btn = document.querySelector('.right1'),
    left1Btn = document.querySelector('.left1'),
    sneakers2 = document.querySelectorAll('.sneaker1 img')

let slideCount = 0

right1Btn.addEventListener('click', () => {
    if(slideCount >= sneakers2.length - 1){
        slideCount = 0
    }else{
        slideCount++
    }
    removeActiveClass2()
    addActive(slideCount)
})

left1Btn.addEventListener('click', () => {
    if(slideCount <= 0){
        slideCount = sneakers2.length - 1
    }else{
        slideCount--
    }
    removeActiveClass2()
    addActive(slideCount)
})

function addActive(i){
    sneakers2[i].classList.add('active')
}

function removeActiveClass2(){
    sneakers2.forEach(item => {
        item.classList.remove('active')
    })
}

}

mobileSlider()
