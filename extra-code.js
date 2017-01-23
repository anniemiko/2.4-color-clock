//extra code//

// setting a function for color code//
// function backColor(hr, mi, sec){
//   hr = hr.toString(16);
//   min = min.toString(16);
//   sec = sec.toString(16);
//   return [hr, min, sec];
// }

// change color of background
function backColor(hr, mi, sec){
  var time = new Date();
  var s = time.getSeconds();
  var hex3 = s + 15;
  var color = '#'+ '5F' + '5D' + hex3;
  document.body.style.background = color;


  // maybe an easier way to do the gradient...//
  // var color2 = color;
  // var color3 = color2;
  // var color4 = color3;
  // var color5 = color4;
  // var color6 = color5;
  // var color7 = color6;
  // var color8 = color7;
  // var color9 = color8;
  //
  // document.body.style.backgroundImage = 'repeatingRadialGradient('+color+','+color2+','+color3+','+color4+','+color5+','+color6+','+color7+','+color8+','+color9+')';


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

// document.body.style.backgroundImage ='repeatingRadialGradient('+backColor+')';

// radial gradient //
// http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element //
// var rect = document.getElementById("timeBox").getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

// radial gradient code from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient //
// var canvas = document.getElementById('wrapper');
// var ctx = canvas.getContext('2d');
//
// var gradient = ctx.createRadialGradient(500, 350, 100, 500, 350, 200);
// ctx.fillStyle = gradient;
// ctx.fillRect(0,0,200,200);



}());
