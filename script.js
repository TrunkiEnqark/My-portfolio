let lastScrollTop = 0;
let navbar = document.querySelector('header');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let navigator = document.querySelector('navbar');

window.addEventListener("scroll", () => {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                if (links) {
                    links.classList.remove('active');
                }
                let el = document.querySelector('header nav a [href*=' + id + ']');
                el.classList.add('active');
            })
        }
    });
}

navigator.onclick = () => {
    navigator.classList.toggle('active');
}