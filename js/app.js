//! time

function showTime(){
    const days = document.querySelector(".day"),
        hours = document.querySelector(".hour"),
        minutes = document.querySelector(".minute"),
        seconds = document.querySelector(".seconds"),
        nextYear = new Date('2023-04-05'),
        currentTime = new Date(),
        diff = nextYear - currentTime,
        daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24),
        hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24,  
        minutesLeft = Math.floor(diff / 1000 / 60) % 60,  
        secondsLeft = Math.floor(diff / 1000) % 60
    
    if(diff > 0) {
        days.innerText = daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }else {
        days.innerText = '00'
        hours.innerText = '00'
        minutes.innerText = '00'
        seconds.innerText = '00'
    }    
}

setInterval(showTime, 1000)

showTime()


//! increment decrement

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


//! hamburger menu

function openCloseHamburgerMenu(){
    const menu = document.querySelector('.menu'),
    toggle = document.querySelector('.toggle'),
     openMenu = document.querySelector('.hamburger'),
    closeMenu = document.querySelector('.x')

function open(){
    menu.style.display = 'flex'
    toggle.style.display = 'flex'
    document.body.style.cssText = `
        overflow: hidden;
    `
}

function close(){
    menu.style.display = 'none'
    toggle.style.display = 'none'
    document.body.style.cssText = `
        overflow: scroll;
    `
}

openMenu.addEventListener('click', open)
closeMenu.addEventListener('click', close)
}

openCloseHamburgerMenu()




//! tabs


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


//! slider Open Close

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

//! mobile slider


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

function addToCart(){
    const cart = document.querySelector('.cart'),
    basket = document.querySelector('.basket1'),
    zero = document.querySelector('.zero'),
    button = document.querySelector('button'),
    product_numh4 = document.querySelector('.product_num h4'),
    product_num = document.querySelector('.product_num')

    basket.addEventListener('click', () => {
        cart.classList.toggle('active')
    })
    button.addEventListener('click', () => {
       if(zero.innerText > 0){
            cart.innerHTML = `
            <h1>Cart</h1>
            <div class='stripe'></div>
            <div class='product'>
                <div class='product_img'>
                    <img src="img/sneaker.png" alt="">
                </div>
                <div class='product_reference'>
                    <h3>Fall Limited Edition Sneakers</h3>
                    <h4>$125.00 x ${zero.innerText}  <span>$${125.00 * zero.innerText + '.' + '00'}</span></h4>
                </div>
                <div class='del'>
                    <img src="img/delete.png" alt="">
                </div>
            </div>
            <div class='check'>
                <p>Checkout</p>
            </div>
    `
        const product = document.querySelector('.product'),
            stripe = document.querySelector('.stripe'),
            product_img = document.querySelector('.product_img'),
            product_img2 = document.querySelector('.product_img img'),
            product_reference = document.querySelector('.product_reference'),
            product_referenceh3 = document.querySelector('.product_reference h3'),
            product_referenceh4 = document.querySelector('.product_reference h4'),
            product_reference_span = document.querySelector('.product_reference span'),
            del = document.querySelector('.del'),
            check = document.querySelector('.check')

        cart.classList.add('active')

        del.addEventListener('click', () => {
            product.style.display = 'none'
            check.style.display = 'none'
            product_num.style.display = 'none'
            cart.innerHTML += `
                <h3 class='empty'>Your cart is empty.</h3>
            `
            const carth3 = document.querySelector('.cart .empty')
            carth3.style.cssText = `
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: #69707d;
                padding-top: 37px;
            `
        })

        check.style.cssText = `
            width: 80%;
            height: 56px;
            cursor: pointer;
            border-radius: 10px;
            margin-left: 24px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            padding-top: 18px;
            color: #FFFFFF;
            background: #FF7E1B;
        `

        del.style.cssText = `
            display: flex; 
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            cursor: pointer;
        `

        product_reference_span.style.cssText = `
            color: black;
        `

        product_referenceh4.style.cssText = `
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #69707D;
        `

        product_referenceh3.style.cssText = `
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #69707D;
            margin-bottom: 10px;
        `

        product_reference.style.cssText = `
            width: 220px;
            height: 100%;
        `

        product_img2.style.cssText = `
            width: 50px;
            height: 50px;
        `

        product_img.style.cssText = `
            width: 50px;
            height: 100%;
        `

        stripe.style.cssText = `
            margin-bottom: 24px;
        `

        product.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 50px;
            margin-bottom: 26px;
        `

        product_num.style.display = 'flex'

        product_numh4.innerText = zero.innerText

        }
    })

    
    
    // console.log(zero.innerText);
}

addToCart()