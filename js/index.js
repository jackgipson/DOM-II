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

logoHeader.addEventListener('mouseover', function(event) {
    document.querySelector("h1").style.color = "red";
  //event.stopPropagation();
})

// Mouseover with Mouseout


logoHeader.addEventListener('mouseout', function(event) {
    document.querySelector("h1").style.color = "black";
  //event.stopPropagation();
})



// Keydown

const keysdown = document.querySelector('.text-content h2');
keysdown.addEventListener('keydown', function(event) {
  console.log(`This is a keydown: ${event.code}`)
})

// Wheel

const wheels = document.querySelector('.intro h2');
console.log(wheels);

wheels.addEventListener('wheel', function(event) {
  console.log(`This is a wheel`)
})

// Load

var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script finished loading and executing");
  });
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);

// // Focus

//   a:focus, a:active {
//     color: green;
//   }
  
//   <a id="myAnchor" href="https://www.w3schools.com">Visit W3Schools.com</a>
  
//   <p>Click the buttons to give focus and/or remove focus from the link above.</p>
  
//  // <input type="button" onclick="getfocus()" value="Get focus">
//   //<input type="button" onclick="losefocus()" value="Lose focus">
  

//   function getfocus() {
//     document.getElementById("myAnchor").focus();
//   }
  
//   function losefocus() {
//     document.getElementById("myAnchor").blur();
//   }

// // Resize

//   function quarter() {
//     window.resizeTo(
//       window.screen.availWidth,
//       window.screen.availHeight
//     );
//   }
// console.log('What?');

// // Scroll

// const upDown = document.querySelector('.home');
// upDown.addEventListener('wheel', function(event) {
// event.currentTarget.style.color = "brown";
//   console.log('srolling up and down');

// // Select

// selects.addEventListener('select', function(event) {
    
//   })

//   //Dblclick

//   const buttons = document.querySelectorAll(".btn");
// buttons.forEach(content => {
//   content.addEventListener('dblclick', function(event) {
//   console.log("select all");
//   event.target.style.color = "blue";
//   })
// })

// Testing out different things

//let aTags = document.querySelectorAll("a");
// let i;
// for (i = 0; i < aTags.length; i++) {
//   aTags[i].style.color = "red";
// }

// aTags.forEach(element => {
//   element.style.color = 'blue';
// });