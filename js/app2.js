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
  // updateScore();
  updateAttempts();
}

setup();

imgParent.addEventListener('click', function(event) {
  if (attempts === maxAttempts) {
    return;
  }

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
    // draw();
    chart();
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

function updateAttempts() {
  attemptsEl.textContent = maxAttempts - attempts;
}

function chart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
}

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['Score', 'Attempts'],
    datasets: [{
      label: 'Number of Correct Answers',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [score, maxAttempts],
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

  ctx.fillText('My string', 10, 100);
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
