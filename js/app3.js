'use strict';

var products = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
console.log(products);
var attempts = 0;
var maxAttempts = 5;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productImagesParent = document.getElementById('productImagesParent');
var responseElement = document.getElementById('response');

setup();

productImagesParent.addEventListener('click', clickedEventListener);

function setup() {
  img1 = generateRandomProduct();
  img2 = generateRandomProduct();
  img3 = generateRandomProduct();
  //update per product
  if (attempts < maxAttempts) {
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
  }
  renderImg1(img1);
  renderImg2(img2);
  renderImg3(img3);

  if (attempts === maxAttempts) {
    productImagesParent.removeEventListener('click', clickedEventListener);
  }
}

function clickedEventListener(event) {
  if (attempts === maxAttempts) {
    return;
  }
  var answer = event.target.id;
  attempts++;
  incrementAttempts();
  if (answer === maxAttempts) {
    renderResponse('25 reached');
  } else {
    renderResponse('not 25 yet');
  }
}

function renderResponse (response) {
  responseElement.textContent = response;
}
function incrementAttempts() {
  var attempts = getAttempts();
  attempts++;
  createOrUpdateAttempts(attempts);
  updateAttemptsElement();
}

function updateAttemptsElement() {
  productImagesParent.textContent = getAttempts() || 0;
}

function getAttempts() {
  var attempts = localStorage.getItem('attemptsEl');
  if (attempts !== null) {
    attempts = parseInt(attempts);
  }
  return attempts;
}

function createOrUpdateAttempts(value) {
  value = value.toString();
  localStorage.setItem('attemptsEl', value);
  var attempts = localStorage.getItem('attemptsEl');
  return attempts;
}

function generateRandomProduct() {
  var index = Math.floor(Math.random() * products.length);
  return products[index];
}

function renderImg1(img1) {
  var img = document.createElement('img');
  img.setAttribute('src', 'img/' + img1 + '.jpg');
  img.setAttribute('id', img1);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}

function renderImg2(img2) {
  var img = document.createElement('img');
  img.setAttribute('src', 'img/' + img2 + '.jpg');
  img.setAttribute('id', img2);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}

function renderImg3(img3) {
  var img = document.createElement('img');
  img.setAttribute('src', 'img/' + img3 + '.jpg');
  img.setAttribute('id', img3);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}
