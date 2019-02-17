// Your code goes here


//document.querySelector(".logo-heading").addEventListener("mouseover", mouseOver);
//document.getElementByTagName("h1").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.querySelector(".logo-heading").style.color = "red";
// }

//function mouseOut() {
//document.getElementByTagName("h1").style.color = "black";
//}

// Mouseover

const logoHeader = document.querySelector("h1");
console.log(logoHeader);

logoHeader.addEventListener('mouseover', function (event) {
  document.querySelector("h1").style.color = "red";
  //event.stopPropagation();
})

// Mouseover with Mouseout

let cat = document.querySelector(".home");
console.log(cat);
cat.addEventListener("mouseover", function (event) {
  document.querySelector(".home").style.color = "purple";
  cat.addEventListener("mouseout", function (event) {
    document.querySelector(".home").style.color = "black";
  })
})


// logoHeader.addEventListener('mouseout', function(event) {
//     document.querySelector("h1").style.color = "black";
//   //event.stopPropagation();
// })

// document.querySelector(".home").addEventListener("mouseover", mouseOver);
// document.querySelector(".home").addEventListener("mouseout", mouseOut);

//  function mouseOver() {
//    document.querySelector(".home").style.color = "purple";
//  }

// function mouseOut() {
//   document.querySelector(".home").style.color = "black";
// }

// Dblclick

let pics = document.querySelectorAll('.container img');

pics.forEach(content => {
  content.addEventListener('dblclick', function (event) {
    console.log('double click');

    event.target.style.width = '20%';
  })
})

// Mouseleave

let navs = document.querySelector('nav a');
navs.addEventListener('mouseleave', () => {
  event.target.style.width = '100%';
  event.target.style.width = '50%';
})

// Click

let navHome = document.querySelector('nav a');
navHome.addEventListener('click', () => {
  event.target.style.backgroundColor = 'yellow';
})

// Keydown

const keysdown = document.querySelector('.text-content h2');
keysdown.addEventListener('keydown', function (event) {
  console.log(`This is a keydown: ${event.code}`)
})

// Wheel

const wheels = document.querySelector('.intro h2');
console.log(wheels);

wheels.addEventListener('wheel', function (event) {
  console.log(`This is a wheel`)
})

// Load

const script = document.createElement("script");
script.addEventListener("load", function (event) {
  console.log("Script finished loading and executing");
});
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js";
script.async = true;
document.getElementsByTagName("script")[0].parentNode.appendChild(script);

// Click

document.querySelector('h1');
logoHeader.addEventListener('click', () => {
  event.target.style.fontSize = '1000%';
})

// Scroll

const upDown = document.querySelector('.home');
upDown.addEventListener('wheel', function (event) {
  event.currentTarget.style.color = "blue";
  console.log('srolling up and down');
});

//Dblclick

const buttons = document.querySelectorAll(".btn");
buttons.forEach(content => {
  content.addEventListener('dblclick', function (event) {
    console.log("select all");
    event.target.style.color = "blue";
    event.preventDefault();
  })
})



// Testing out different things

//let aTags = document.querySelectorAll("a");
// let i;
// for (i = 0; i < aTags.length; i++) {
//   aTags[i].style.color = "red";
// }

// aTags.forEach(element => {
//   element.style.color = 'blue';
// });