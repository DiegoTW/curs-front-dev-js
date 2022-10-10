const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShopCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarIconMenu.addEventListener('click', toggleNavbarIconMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarShopCart.addEventListener('click', toggleProductDetail);

function toggleNavbarIconMenu() {
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu() {
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.toggle('inactive');
}