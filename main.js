// show navBar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function() {
    nav.classList.toggle('show-nav');
}

//close navbar on clicking navlink

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//change active navlink

const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))