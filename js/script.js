"use strict";

let NavLinkArr = document.querySelectorAll('.header__nav-item');

NavLinkArr.forEach(element => {
    element.addEventListener('click', () => {
        NavLinkArr.forEach(item => {item.classList.remove('active')});
        element.classList.toggle('active');
    })
})
