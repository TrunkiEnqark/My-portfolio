let lastScrollTop = 0;
let navbar = document.querySelector('header');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
// let menu = document.querySelector('navbar');

// window.addEventListener("scroll", () => {
//     var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         navbar.classList.add('hidden');
//     } else {
//         navbar.classList.remove('hidden');
//     }
//     lastScrollTop = scrollTop;
// })

window.onscroll = () => {
    sections.forEach(sec => {
        let scrolledY = window.scrollY;
        let id = sec.getAttribute('id');
        let height = sec.offsetHeight;
        let scrollTop = sec.offsetTop;
        console.log(scrolledY + ' ' + scrollTop + ' ' + height + ' ' + id)
        if (scrollTop <= scrolledY && scrolledY < scrollTop + height) {
            removeActiveClasses();
            activeClassById(id);
        }
    })
}

navLinks.forEach(links => {
    links.addEventListener('click', () => {
        removeActiveClasses();
        links.classList.add('active');
    })
})

function removeActiveClasses() {
    navLinks.forEach(links => {
        links.classList.remove('active')
    })
}

function activeClassById(id) {
    navLinks.forEach(links => {
        if (links.href.includes(id)) {
            links.classList.toggle('active');
        }
    })
}