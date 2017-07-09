'use strict';

function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.shown = '';
  this.clicked = '';
}
//array
var products = [
  new Product('babySweep', 'img/babySweep.jpg'),
  new Product('bag', 'img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulhu', 'img/cthulhu.jpg'),
  new Product('dogDuck', 'img/dogDuck.jpg'),
  new Product('dragon', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('petSweep', 'img/petSweep.jpg'),
  new Product('scissors', 'img/scissors.jpg'),
  new Product('shark', 'img/shark.jpg'),
  new Product('tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('usb', 'img/usb.jpg'),
  new Product('waterCan', 'img/waterCan.jpg'),
  new Product('wineGlass', 'img/wineGlass.jpg')
];

// var products = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
// console.log(products);

var attempts = '';
var maxAttempts = 25;
var lastRefresh = [];
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
  if (attempts <= maxAttempts) {
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
  var productClicked = event.target.id;
  attempts++;
  console.log('infunc: ' + productClicked);
  console.log(attempts);
  setup();

  if (attempts === maxAttempts) {
    return;
    renderResponse('25 reached');
  } else {
    renderResponse('not 25 yet');
  }
}

function renderResponse (response) {
  responseElement.textContent = response;
}


function generateRandomProduct() {
  do {
    var index = Math.floor(Math.random() * products.length);
    // return products[index];
    var notImg = products[index];
  } while (lastRefresh.includes(notImg));

  lastRefresh.push(notImg);

  if (lastRefresh.length === 6) {
    lastRefresh.shift();
    lastRefresh.shift();
    lastRefresh.shift();
    //make math random to choose random pics
  }
  return notImg;
}

function renderImg1(img1) {
  var img = document.createElement('img');
  img.setAttribute('src', img1.path);
  img.setAttribute('id', img1.productName);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}
console.log('img1: ' + img1.path);

function renderImg2(img2) {
  var img = document.createElement('img');
  img.setAttribute('src', img2.path);
  img.setAttribute('id', img2.productName);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}

function renderImg3(img3) {
  var img = document.createElement('img');
  img.setAttribute('src', img3.path);
  img.setAttribute('id', img3.productName);
  img.setAttribute('width', '200px');
  img.setAttribute('height', '200px');
  productImagesParent.appendChild(img);
}
