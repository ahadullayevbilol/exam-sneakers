function tabs(){
    const imgTabSlider = document.querySelectorAll('.all_shoes1 div'),
    sneakers1 = document.querySelectorAll('.sneaker2 img'),
    imgTabs = document.querySelectorAll('.all_shoes div'),
    sneakers = document.querySelectorAll('.sneaker1 img')
     
function removeActiveClass() {
    const imgTabs = document.querySelectorAll('.all_shoes div')
    const sneakers = document.querySelectorAll('.sneaker1 img')
    
    sneakers.forEach(sneaker => {
        sneaker.classList.remove('active');
        imgTabs.forEach(imgTab => {
            imgTab.style.cssText = `
                background: none;
                border: 0;
                border-radius: 0;
            `
        })
    })
}
    
function removeActiveClass1() {
    const imgTabSlider = document.querySelectorAll('.all_shoes1 div'),
        sneakers1 = document.querySelectorAll('.sneaker2 img')
        
    sneakers1.forEach(sneaker => {
        sneaker.classList.remove('active');
        imgTabSlider.forEach(imgTab => {
            imgTab.style.cssText = `
                background: none;
                border: 0;
                border-radius: 0;
            `
        })
    })
}


imgTabs.forEach((imgTab, index) => {
    imgTab.addEventListener('click', () => {
        removeActiveClass()
        sneakers[index].classList.add('active')
        imgTab.style.cssText = `
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
            border: 2px solid #ff7e1b;
            border-radius: 10px;
            opacity: .5;
        `
    })  
})
imgTabSlider.forEach((imgTab, index) => {
    imgTab.addEventListener('click', () => {
        removeActiveClass1()
        sneakers1[index].classList.add('active')
        imgTab.style.cssText = `
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
            border: 2px solid #ff7e1b;
            border-radius: 10px;
            opacity: .5;
        `
    })  
})
}


tabs()