function sliderOpenClose(){
    const openSliderMenu = document.querySelector('.sneaker1'),
        slider = document.querySelector('.slider'),
        closeSliderMenu = document.querySelector('.xx'),
        sneaker2Img = document.querySelectorAll('.sneaker2 img'),
        right = document.querySelector('.right'),
        left = document.querySelector('.left')

    openSliderMenu.addEventListener('click', () => {
        if(screen.width > 685){
            slider.style.display = 'flex'
            document.body.style.cssText = `
                overflow: hidden;
            `
        }
    })

    closeSliderMenu.addEventListener('click', () => {
        slider.style.display = 'none'
        document.body.style.cssText =  `
            overflow: scroll;
        `
})


let sliderCount = 0

right.addEventListener('click', () => {
    if(sliderCount >= sneaker2Img.length - 1){
        sliderCount = 0
    }else{
        sliderCount++
    }
    removeActiveClasses()
    addActiveClasses(sliderCount)
})

left.addEventListener('click', () => {
    if(sliderCount <= 0){
        sliderCount = sneaker2Img.length - 1
    }else{
        sliderCount--
    }
    removeActiveClasses()
    addActiveClasses(sliderCount)
})


function addActiveClasses(i){
    sneaker2Img[i].classList.add('active')
}

function removeActiveClasses(){
    sneaker2Img.forEach(sneaker2Img => {
        sneaker2Img.classList.remove('active')
    })
}

window.addEventListener('click', (e) => {
   if(e.target == slider){
        slider.style.display = 'none'
        document.body.style.cssText =  `
            overflow: scroll;
        `
   }
})

}

sliderOpenClose()
