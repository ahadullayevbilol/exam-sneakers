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