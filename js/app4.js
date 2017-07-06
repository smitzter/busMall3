'use strict';

// function Product(productName, path) {
//   this.productName = productName;
//   this.path = path;
// }
//array
var products = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
console.log(products);
var attempts = '';
var maxAttempts = 25;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productImagesParent = document.getElementById('productImagesParent');
var responseElement = document.getElementById('response');

setup();

productImagesParent.addEventListener('click', clickedEventListener);

// function handleClicks() {
//   when clicked call the function setup()
// }
// and then within generateRandomProducts  { generate random products..... call rendrImg3() renderImg2() RenderImg1()
function setup() {
  // attempts++;
  // incrementAttempts();
  img1 = generateRandomProduct();
  img2 = generateRandomProduct();
  img3 = generateRandomProduct();
  //update per product
  // if (attempts <= maxAttempts) {
  // productImagesParent.removeChild(productImagesParent.lastChild);
  // productImagesParent.removeChild(productImagesParent.lastChild);
  // productImagesParent.removeChild(productImagesParent.lastChild);
  // }
  renderImg1(img1);
  renderImg2(img2);
  renderImg3(img3);
  // updateAttempts();
  // if (attempts === maxAttempts) {
  //   // do things
  //   productImagesParent.removeEventListener('click', clickedEventListener);
  // }
}


function clickedEventListener(event) {
  var productClicked = event.target.id;
  attempts++;
  console.log('infunc: ' + productClicked);
  console.log(attempts);
  if (attempts === maxAttempts) {
    productImagesParent.removeEventListener('click', clickedEventListener);
    renderResponse('25 reached');
    return;
  }
  // var attempts = event.target.id;
  // attempts++;
  // incrementAttempts();

  if (attempts === maxAttempts) {
    setup();
    // renderResponse('25 reached');
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
  } else {
    renderResponse('error');
  }
  return attempts;
}

function renderResponse (response) {
  responseElement.textContent = response;
}
// function incrementAttempts() {
//   var attempts = getAttempts();
//   // attempts++;
//   // createOrUpdateAttempts(attempts);
//   updateAttemptsElement(attempts);
// }

// function updateAttemptsElement() {
//   productImagesParent.textContent = getAttempts() || 0;
// }
//
// function getAttempts() {
//   var attempts = localStorage.getItem('attemptsEl');
//   if (attempts !== null) {
//     attempts = parseInt(attempts);
//   }
//   return attempts;
// }

// function createOrUpdateAttempts(value) {
//   value = value.toString();
//   localStorage.setItem('attemptsEl', value);
//   var attempts = localStorage.getItem('attemptsEl');
//   return attempts;
// }
// function updateAttempts() {
//   attemptsEl.textContent = maxAttempts - attempts;
// }

function generateRandomProduct() {
  var index = Math.floor(Math.random() * products.length);
  return products[index];
  //make math random to choose random pics
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
//make products array

////====modify content====////
//get placehoder id from html
//render random image to page - appendChild

//====program rules====//
//refresh page after click

//make stop after 25 clicks - event listener

///local storage + clicks event listen////////
//store local data
//retrieve local data

/////////==the chart==///////////////////
//make code to follow clicks, event listener
//make code to display clicks in table

///////==animation==/////
///in html/css at least one CSS transition/animation of your choice.

//notes from Stephanie
// what your functions expect as parameters, and what you're passing them. A method on an object knows about the object it's attached to, so you frequently don't need to pass it anything. Also, you reference productplaceImg, but I don't see it defined anywhere. And...what is pushImg? Looks like it's not used.
