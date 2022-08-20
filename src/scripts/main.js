'use strict';

/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ===== MENU SHOW ===== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* ===== MENU HIDDEN ===== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* =============== REMOVE MENU MOBILE =============== */

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/* =============== CHANGE BACKGROUND HEADER ============== */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 893) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});
