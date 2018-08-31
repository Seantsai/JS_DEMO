/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/baby.jpg');
    } 
    else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('請輸入你的名字： ');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '歡迎蒞臨本站, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '歡迎蒞臨本站, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}