'use strict';

function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}
//array
var products = [
  new Product('babySweep', 'img/babySweep.jpg', 0, 0),
  new Product('bag', 'img/bag.jpg', 0, 0),
  new Product('banana', 'img/banana.jpg', 0, 0),
  new Product('bathroom', 'img/bathroom.jpg', 0, 0),
  new Product('boots', 'img/boots.jpg', 0, 0),
  new Product('breakfast', 'img/breakfast.jpg', 0, 0),
  new Product('bubblegum', 'img/bubblegum.jpg', 0, 0),
  new Product('chair', 'img/chair.jpg', 0, 0),
  new Product('cthulhu', 'img/cthulhu.jpg', 0, 0),
  new Product('dogDuck', 'img/dogDuck.jpg', 0, 0),
  new Product('dragon', 'img/dragon.jpg', 0, 0),
  new Product('pen', 'img/pen.jpg', 0, 0),
  new Product('petSweep', 'img/petSweep.jpg', 0, 0),
  new Product('scissors', 'img/scissors.jpg', 0, 0),
  new Product('shark', 'img/shark.jpg', 0, 0),
  new Product('tauntaun', 'img/tauntaun.jpg', 0, 0),
  new Product('unicorn', 'img/unicorn.jpg', 0, 0),
  new Product('usb', 'img/usb.jpg', 0, 0),
  new Product('waterCan', 'img/waterCan.jpg', 0, 0),
  new Product('wineGlass', 'img/wineGlass.jpg', 0, 0)
];

var attempts = '';
var maxAttempts = 25;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var productImagesParent = document.getElementById('imgParent');
var attemptsEl = document.getElementById('imgParent');
var clickedEl = document.getElementById('imgParent');

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

imgParent.addEventListener('click', clickedEventListener);

function clickedEventListener(event) {
  if (attempts < maxAttempts) {
    var answer = event.target.id;
    attempts++;
    incrementAttempts();

    // if (answer != []) {
    //   alert('please click on image');
    // }
    if (answer === products[0]) {
      babySweep.clicked++;
      babySweep.createOrUpdateClicks();
    } else if (answer === products[1]) {
      bag.clicked++;
      bag.createOrUpdateClicks();
    } else if (answer === products[2]) {
      banana.clicked++;
      banana.createOrUpdateClicks();
    } else if (answer === products[3]) {
      bathroom.clicked++;
      bathroom.createOrUpdateClicks();
    } else if (answer === products[4]) {
      boots.clicked++;
      boots.createOrUpdateClicks();
    } else if (answer === products[5]) {
      breakfast.clicked++;
      breakfast.createOrUpdateClicks();
    } else if (answer === products[6]) {
      bubblegum.clicked++;
      bubblegum.createOrUpdateClicks();
    } else if (answer === products[7]) {
      chair.clicked++;
      chair.createOrUpdateClicks();
    } else if (answer === products[8]) {
      cthulhu.clicked++;
      cthulhu.createOrUpdateClicks();
    } else if (answer === products[9]) {
      dogDuck.clicked++;
      dogDuck.createOrUpdateClicks();
    } else if (answer === products[10]) {
      dragon.clicked++;
      dragon.createOrUpdateClicks();
    } else if (answer === products[11]) {
      pen.clicked++;
      pen.createOrUpdateClicks();
    } else if (answer === products[12]) {
      petSweep.clicked++;
      petSweep.createOrUpdateClicks();
    } else if (answer === products[13]) {
      scissors.clicked++;
      scissors.createOrUpdateClicks();
    } else if (answer === products[14]) {
      shark.clicked++;
      shark.createOrUpdateClicks();
    } else if (answer === products[15]) {
      tauntaun.clicked++;
      tauntaun.createOrUpdateClicks();
    } else if (answer === products[16]) {
      unicorn.clicked++;
      unicorn.createOrUpdateClicks();
    } else if (answer === products[17]) {
      usb.clicked++;
      usb.createOrUpdateClicks();
    } else if (answer === products[18]) {
      waterCan.clicked++;
      waterCan.createOrUpdateClicks();
    } else if (answer === products[19]) {
      wineGlass.clicked++;
      wineGlass.createOrUpdateClicks();
    } else {
      alert('please click on image');
    };

    // setup();

    if (attempts === maxAttempts) {
      // do things
      imgParent.removeEventListener('click', clickedEventListener);
      draw();
      chart();
    }
  }
};

function generateRandomProduct() {
  var index = Math.floor(Math.random() * products.length);
  return products[index];
  //create math random to choose random pics
}
console.log(products);

function renderImg1() {
  var img = document.createElement('img');
  img.setAttribute('src', img1.path);
  img.setAttribute('id', img1.productName);
  img.setAttribute('width', '150px');
  img.setAttribute('height', '150px');
  productImagesParent.appendChild(img);
}

function renderImg2() {
  var img = document.createElement('img');
  img.setAttribute('src', img2.path);
  img.setAttribute('id', img2.productName);
  img.setAttribute('width', '150px');
  img.setAttribute('height', '150px');
  productImagesParent.appendChild(img);
}

function renderImg3() {
  var img = document.createElement('img');
  img.setAttribute('src', img3.path);
  img.setAttribute('id', img3.productName);
  img.setAttribute('width', '150px');
  img.setAttribute('height', '150px');
  productImagesParent.appendChild(img);
}


//localStorage//
createOrUpdateClicks();

function createOrUpdateClicks() {
  for (var i = 0; i < products.length; i++) {
    //     var storeStats = localStorage.getItem('stats')
    //     var stringifiedStats = JSON.stringify(stats);
    //     localStorage.setItem('stats', stringifiedStats);
    //     var storeStats = localStorage.getItem('stats');
    //   //unstringify it
    //     var parsedStats = JSON.parse(storeStats);
    //     console.log(products[i].productName + ';' + products[i].clicked + '/' + productStat[i].shown);
    //     return parsedStats;
    //   }
    // }
    // stringStats();
    incrementClicks();

    function incrementClicks() {
      var clicked = getClicks();
      createOrUpdateClicks(clicked);
      clickedEl.textContent = getClicks() || 0;
    }

    function getClicks() {
      var clicked = localStorage.getItem('clickedEL');
      if (clicked !== null) {
        clicked = parseInt(clicked);
      }
      return clicked;
    }

    function createOrUpdateClicks() {
      value = this.toString();
      localStorage.setItem('clickedEl', value);
      var clicked = localStorage.getItem('clickedEl');
      return clicked;
    }
  }
}
//////attempts

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
function updateAttempts() {
  attemptsEl.textContent = maxAttempts - attempts;
}
// function deleteAttempts() {
//   localStorage.removeItem('attemptsEl');
//   return null;
// }
//
// function getProductData() {
//   var storageProductData = localStorage.getItem('productData');
//   // unstringify it
//   var parsedProductData = JSON.parse(storageProductData);
//   return parsedProductData;
// }
// //
// function createOrUpdateProductData(newProduct, oldProduct) {
//   var ProductData = {
//     newProduct: newProduct,
//     oldProduct: oldProduct
//   };
//   // convert to a stringified format


//
// function deleteProductData() {
//   localStorage.removeItem('productState');
// }
//
// function clearAllData() {
//   localStorage.clear();
//   return null;
// }



function chart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var attempts = getAttempts();
  var clicks = clicked();

  //i want to get how many times the obj in the array was clicked
  chart;
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
