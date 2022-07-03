
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active')
    burger.classList.toggle('burger_active')
    document.body.classList.toggle('_lock')
})