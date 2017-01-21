(function(){
  "use strict";


var hours = document.getElementById('j-hours');
var minutes = document.getElementById('j-minutes');
var seconds = document.getElementById('j-seconds');

function currentTime(){

  var time = new Date();

  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  if (h > 12){
    h = h - 12;
  }

  if (h<10){
    h = "0" + h;
  }

  if (m < 10){
    m = "0" + m;
  }

  if (s < 10){
    s = "0" + s;
  }

  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}

// timebar

function move(){
  var timebar = document.getElementById('j-timebar');
  var time = new Date();
  var s = time.getSeconds();
  timebar.style.width = s + "%";
}

// calculate percentage
// function percentage(){
//   var percent = s/60;
//   return percent;
// }
// console.log(percent)

window.setInterval(currentTime, 1000);

// change color of background
function backColor(){
var time = new Date();
var s = time.getSeconds();
var color = '#'+'0D'+'4F'+s;
document.body.style.background = color;
}
window.setInterval(backColor, 1000);





}());
