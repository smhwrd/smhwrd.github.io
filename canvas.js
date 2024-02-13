let canvas = document.getElementById("canvas")
//const ctx = canvas.getContext("2d");

fitToContainer(canvas);

// console.log(canvas);
// console.log("hello")

// ctx.fillStyle = 'black'


// let point = {x: canvas.width/2, 
//              y: canvas.height/2}

// render();

// function render(){
//   point.x += (Math.random()-.5)*5
//   point.y += (Math.random() -.5)*5
//   ctx.rect( point.x, point.y, 5, 5)
//   ctx.fill()
 
//   window.requestAnimationFrame(render);
// }

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

