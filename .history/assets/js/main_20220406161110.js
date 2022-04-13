

/* ===================== SHOW MENU ========================= */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ====== MENU SHOW ====*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
/* ===== MENU HIDEN =====*/

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}
/* ====== REMOVE MENU MOBILE ON CLICK LINK ======== */
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}
navLink.forEach( n => n.addEventListener('click', linkAction));

/* ======================= SCROLL ============================ */
function scrollheader() {
    const header = document.getElementById('header');
    if(this.scrollY >=50) {
        header.classList.add('scroll-header');
    }
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollheader);