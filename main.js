(function(){
  "use strict";

var clock = document.querySelector('h1');
var isHovering = false;
// console.log(clock);

var hours = document.getElementById('j-hours');
var minutes = document.getElementById('j-minutes');
var seconds = document.getElementById('j-seconds');

function formatTime(hr, min,sec){
  if (hr > 12){
    hr = hr - 12;
  }

  hr = ('0' + hr).slice(-2);
  min = ('0' + min).slice(-2);
  sec = ('0' + sec).slice(-2);

  return [hr, min, sec];
}

function color(hr, min, sec){
  hr = hr.toString(16);
  min = min.toString(16);
  sec = sec.toString(16);

  return formatTime(hr, min, sec);
}

function backColor(hr, min, sec){
  var colorArray = color(hr, min, sec);
  return "#" + colorArray.join("");
}



function currentTime(){

  var time = new Date();

  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  var clockDisplay;

  if(isHovering){
    clockDisplay = color(hr, min, sec);
  }else{
    clockDisplay = formatTime(hr, min , sec);
  }

  hours.textContent = clockDisplay[0];
  minutes.textContent = clockDisplay[1];
  seconds.textContent = clockDisplay[2];

  var percent = sec / 60 * 100;

  document.getElementById('bar').style.width = percent + '%';

  document.body.style.backgroundColor = backColor(hr, min, sec);
  console.log(backColor(hr, min, sec));
}

function hover(){
  isHovering = true;
}

function hoverOff(){
  isHovering = false;
}

clock.addEventListener('mouseover', hover);
clock.addEventListener('mouseout', hoverOff);


window.setInterval(currentTime, 20);

}())
