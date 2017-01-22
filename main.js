(function(){
  "use strict";


var hours = document.getElementById('j-hours');
var minutes = document.getElementById('j-minutes');
var seconds = document.getElementById('j-seconds');

function currentTime(){

  var time = new Date();

  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  if (hr > 12){
    hr = hr - 12;
  }

  if (hr<10){
    hr = "0" + hr;
  }

  if (min < 10){
    min = "0" + min;
  }

  if (sec < 10){
    sec = "0" + sec;
  }

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;

  var percent = sec / 60 * 100;

  document.getElementById('bar').style.width = percent + '%';
}

window.setInterval(currentTime, 1000);

// change color of background
function backColor(){
  var time = new Date();
  var s = time.getSeconds();
  var hex3 = s + 15;
  var color = '#'+ '5F' + '5D' + hex3;
  document.body.style.background = color;

// HOVER following code found in link provided in assignement: http://eloquentjavascript.net/14_event.html#h_HQoLxG2r2l
  var hover = document.querySelector('h1');
  function isInside (node, target){
    for (; node != null; node = node.parentNode)
      if (node == target) return true;
  }
  hover.addEventListener ("mouseover", function (event){
    if (!isInside(event.relatedTarget, hover))
    hours.textContent = '5F';
    minutes.textContent = '5D';
    seconds.textContent = hex3;
  });
  hover.addEventListener('mouseout', function(event){
    if (!isInside(event.relatedTarget, hover))
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
  });
}

window.setInterval(backColor, 1000);

// radial gradient //
// http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element //
var rect = document.getElementById("timeBox").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

// radial gradient code from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient //
var canvas = document.getElementById('wrapper');
var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(500, 350, 100, 500, 350, 200);
ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,200);


}());
