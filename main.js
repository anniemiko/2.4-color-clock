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
  var color = '#'+'0D'+'4F'+s;
  document.body.style.background = color;
}

window.setInterval(backColor, 1000);





}());
