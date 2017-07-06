'use strict';

// function Product(productName) {
//   this.productName = productName;
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
var attemptsEl = document.getElementById('attemptsEl');

function setup() {
  img1 = generateRandomProduct();
  img2 = generateRandomProduct();
  img3 = generateRandomProduct();
  updateAttemptsElement();
  //update per product
  if (attempts) {
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
    productImagesParent.removeChild(productImagesParent.lastChild);
  }
  renderImg1(img1);
  renderImg2(img2);
  renderImg3(img3);
  updateAttempts();
}

setup();

imgParent.addEventListener('click', function(event) {
  if (attempts != maxAttempts) {
    var answer = event.target.getAttribute('imgParent');
    attempts++;
    incrementAttempts();

    if (answer != []) {
      alert('please click on image');
    }
    if (answer === products[0]) {
      babySweep++;
    } else if (answer === products[1]) {
      bag++;
    } else if (answer === products[2]) {
      banana++;
    } else if (answer === products[3]) {
      bathroom++;
    } else if (answer === products[4]) {
      boots++;
    } else if (answer === products[5]) {
      breakfast++;
    } else if (answer === products[6]) {
      bubblegum++;
    } else if (answer === products[7]) {
      chair++;
    } else if (answer === products[8]) {
      cthulhu++;
    } else if (answer === products[9]) {
      dogDuck++;
    } else if (answer === products[10]) {
      dragon++;
    } else if (answer === products[11]) {
      pen++;
    } else if (answer === products[12]) {
      petSweep++;
    } else if (answer === products[13]) {
      scissors++;
    } else if (answer === products[14]) {
      shark++;
    } else if (answer === products[15]) {
      tauntaun++;
    } else if (answer === products[16]) {
      unicorn++;
    } else if (answer === products[17]) {
      usb++;
    } else if (answer === products[18]) {
      waterCan++;
    } else if (answer === products[19]) {
      wineGlass++;
    } else {
      alert('please click on image');
    };

    // setup();

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
  //create math random to choose random pics
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
function incrementAttempts() {
  var attempts = getAttempts();
  attempts++;
  createOrUpdateAttempts(attempts);
  updateAttemptsElement();
}

function updateAttemptsElement() {
  attemptsEl.textContent = getAttempts() || 0;
}

function getAttempts() {
  var attempts = localStorage.getItem('attemptsEL');
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

function deleteAttempts() {
  localStorage.removeItem('attemptsEl');
  return null;
}

function getProductState() {
  var storageProductState = localStorage.getItem('ProductState');
  // unstringify it
  var parsedProductState = JSON.parse(storageProductState);
  return parsedProductState;
}
//
function createOrUpdateProductState(newProduct, oldProduct) {
  var ProductState = {
    newProduct: newProduct,
    oldProduct: oldProduct
  };
  // convert to a stringified format
  var stringifiedProductState = JSON.stringify(ProductState);
  localStorage.setItem('ProductState', stringifiedProductState);
  var storageProductState = localStorage.getItem('ProductState');
  //unstringify it
  var parsedProductState = JSON.parse(storageProductState);
  return parsedProductState;
}

function deleteProductState() {
  localStorage.removeItem('productState');
}

function clearAllData() {
  localStorage.clear();
  return null;
}

function updateAttempts() {
  attemptsEl.textContent = maxAttempts - attempts;
}

function chart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var attempts = getAttempts();
  //i want to get how many times the obj in the array was clicked

  var chart = new Chart(ctx, {
    // The type of chart
    type: 'bar',
    // The data for dataset
    data: {
      labels: ['Product Name'],
      datasets: [{
        label: 'Clicks',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [clicks, attempts],
      }]
    },

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
}

function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#26b7cf';
  ctx.fillRect(10, 10, 20, 100);

  ctx.fillStyle = '#cf2663';
  ctx.fillRect(80, 10, 20, 100);

  ctx.fillText('Product', 10, 100);
}
  //create products array

  ////====modify content====////
  //get placehoder id from html
  //render random image to page - appendChild

  //====program rules====//
  //refresh page after click

  //create stop after 25 clicks - event listener

  ///local storage + clicks event listen////////
  //store local data
  //retrieve local data

  /////////==the chart==///////////////////
  //create code to follow clicks, event listener
  //store clicks in local storage, event handler
  //retrieve from local storage
  //create code to display clicks in table

  ///////==animation==/////
  ///in html/css at least one CSS transition/animation of your choice.

  //notes from Stephanie
  // what your functions expect as parameters, and what you're passing them. A method on an object knows about the object it's attached to, so you frequently don't need to pass it anything. Also, you reference productplaceImg, but I don't see it defined anywhere. And...what is pushImg? Looks like it's not used.
