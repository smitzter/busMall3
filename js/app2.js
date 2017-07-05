'use strict';

//////the base assignment/////////////
//make constructor function
//this.name
//this.path
//this.clicks 0;
//this.views 0;
function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
};

Product.prototype.render = render;
Product.prototype.pushToArray = function() {
  products.push(this);
};

////====access content====////
//access content select element
//var clicks?
//var views?
//var final views =25?

//getElementById lt img
//var left image
var img1 = document.getElementById('img1');
img1;
//getElementById rt img
//var right image
var img2 = document.getElementById('img2');
img2;
//getElementById ct img
//var center image
var img3 = document.getElementById('img3');
img3;
//make for var i loop to go through array
randoProductImg();

function randoProductImg(products) {
  for (var i = 0; i < 20; i++);
  var index = Math.floor(Math.random() * randoProductImg.length);
  return index;
  console.log(products);
  //make math random to choose random pics
}


function render(randoProductImg) {
  do {
    var pushImg =
      document.getElementById('img' + i);
    productplaceImg.setAttribute('src', randoProductImg.path);
    productplaceImg.setAttribute('width', '200px');
    productplaceImg.setAttribute('height', '200px');
    document.body.appendChild(productplaceImg);
    console.log(pushImg);
  } while (i = 0, i < 3, i++);
};
console.log(render);
//make products array
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
console.log(products);
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
