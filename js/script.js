const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
const links = document.querySelectorAll('a.menu__link')

// Бургер меню
burger.addEventListener('click', () => {
    addActivClass()
})

const addActivClass = function() {
    menu.classList.toggle('menu_active')
    burger.classList.toggle('burger_active')
    document.body.classList.toggle('_lock')
}

window.addEventListener('resize', () => {
    if (document.body.classList.contains('_lock')){
        addActivClass()
    }
})

// Плавная прокрутка до якоря
links.forEach(link => {
    link.addEventListener('click', function(e) {
        if (document.documentElement.clientWidth < 768 ) {
            addActivClass()
        }
        
        e.preventDefault()
        let href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 54
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

// Изменение стилей для шапки при скролле
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        header.classList.add('_scroll')
    } else if (scrollY < 50) {
        header.classList.remove('_scroll')
    }
})


