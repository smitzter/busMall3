'use strict';

// function Product(productName, path) {
//   this.productName = productName;
//   this.path = path;
// }
//array
var products = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
console.log(products);

var attempts = 0;
var maxAttempts = 25;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productImagesParent = document.getElementById('imgParent');
var attemptsEl = document.getElementById('attempts');



function setup() {
  img1 = generateRandomProduct();
  img2 = generateRandomProduct();
  img3 = generateRandomProduct();
  renderImg1(img1);
  renderImg2(img2);
  renderImg3(img3);
//update per product
if (attempts) {
  productImagesParent.removeChild(productImagesParent.lastChild);
  productImagesParent.removeChild(productImagesParent.lastChild);
  productImagesParent.removeChild(productImagesParent.lastChild);
}
  updateAttempts();
}

setup();

imgParent.addEventListener('click', function(event) {
  if (attempts != maxAttempts) {
    var answer = event.target.getAttribute('id');
    attempts++;

  if (answer != []) {
    alert('please click on image');
  }
  if (answer === [0]) {
    babySweep++;
  } else if (answer === [1]) {
    bag++;
  } else if (answer === [2]) {
    banana++;
  } else if (answer === [3]) {
    bathroom++;
  } else if (answer === [4]) {
    boots++;
  } else if (answer === [5]) {
    breakfast++;
  } else if (answer === [6]) {
    bubblegum++;
  } else if (answer === [7]) {
    chair++;
  } else if (answer === [8]) {
    cthulhu++;
  } else if (answer === [9]) {
    dogDuck++;
  } else if (answer === [10]) {
    dragon++;
  } else if (answer === [11]) {
    pen++;
  } else if (answer === [12]) {
    petSweep++;
  } else if (answer === [13]) {
    scissors++;
  } else if (answer === [14]) {
    shark++;
  } else if (answer === [15]) {
    tauntaun++;
  } else if (answer === [16]) {
    unicorn++;
  } else if (answer === [17]) {
    usb++;
  } else if (answer === [18]) {
    waterCan++;
  } else if (answer === [19]) {
    wineGlass++;
  } else {
    alert('please click on image');
  };

    if (attempts === maxAttempts) {
    // do things
      draw();
      chart();
    }
  }
});

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


//localStorage//
function incrementAttempts () {
  var attempts = getAttempts();
  attempts++
  createOrUpdateAttempts(attempts);
  updateAttemptsElement();
}

function updateAttemptsElement () {
  attemptsElement.textContent = getAttempts() || 0;
}

function getAttempts () {
  var attempts = localStorage.getItem('attempts');
  if (attempts !== null) {
    attempts = parseInt(attempts);
  }
  return attempts;
}

function createOrUpdateAttempts (value) {
  value = value.toString();
  localStorage.setItem('attempts', value);
  var attempts = localStorage.getItem('attempts');
  return attempts;
}

function deleteAttempts () {
  localStorage.removeItem('attempts');
  return null;
}

function getProductState () {
  var storageProductState = localStorage.getItem('ProductState');
  //unstringify it
  var parsedProductState = JSON.parse(storageProductState);
  return parsedProductState;
}

function createOrUpdateProductState (correctProduct, wrongProduct) {
  var ProductState = {
    correctProduct: correctProduct,
    wrongProduct: wrongProduct
  };
  // convert to a stringified format
  var stringifiedProductState = JSON.stringify(ProductState);
  localStorage.setItem('ProductState', stringifiedProductState);
  var storageProductState = localStorage.getItem('ProductState');
  //unstringify it
  var parsedProductState = JSON.parse(storageProductState);
  return parsedProductState;
}

function deleteProductState () {
  localStorage.removeItem('productState');
}

function clearAllData () {
  localStorage.clear();
  return null;
}

function updateAttempts() {
  attemptsEl.textContent = maxAttempts - attempts;
}

function chart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var something = getSomething();
  //i want to get how many times the obj in the array was clicked
}

var chart = new Chart(ctx, {
  // The type of chart
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['Product Name'],
    datasets: [{
      label: 'Clicks',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [productClicks, maxAttempts],
    }]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#26b7cf';
  ctx.fillRect(10, 10, 20, 100);

  ctx.fillStyle = '#cf2663';
  ctx.fillRect(80, 10, 20, 100);

  ctx.fillText('Product', 10, 100);
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
