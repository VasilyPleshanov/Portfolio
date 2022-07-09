const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
const links = document.querySelectorAll('a.menu__link')

// Бургер меню
burger.addEventListener('click', () => {
    addActivClass()
})

const addActivClass = function() {
    menu.classList.toggle('_active')
    burger.classList.toggle('_active')
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

// Появление элементов при прокрутке страницы
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('_element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('._element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
