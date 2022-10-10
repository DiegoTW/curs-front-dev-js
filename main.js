const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShopCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navbarIconMenu.addEventListener('click', toggleNavbarIconMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarShopCart.addEventListener('click', toggleshoppingCartContainer);

function toggleNavbarIconMenu() {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}

/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Computer',
  price: 870,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Boat',
  price: 1840,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {

    // creacion de la card y sus elementos
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    // union de los elementos creados anteriormente
    productInfoFigure.append(productImgCart);
    productInfo.append(productInfoDiv);
    productInfo.append(productInfoFigure);
    productCard.append(imgCart);
    productCard.append(productInfo);
    productInfoDiv.append(productPrice);
    productInfoDiv.append(productName);
    
    // agregado al div vacío en el HTML
    cardsContainer.append(productCard);
  
  }
}

renderProducts(productList);

