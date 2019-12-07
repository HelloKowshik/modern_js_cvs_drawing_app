let cvs = document.querySelector("canvas");
let ctx = cvs.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(10,30);
// ctx.lineTo(50,190);
// ctx.stroke();
var drawing = false;
var oldX = 0;
var oldY = 0;
ctx.strokeStyle="#f00";
cvs.addEventListener('mousedown',e=>{
drawing = true;
oldX = e.offsetX;
oldY = e.offsetY;
});

cvs.addEventListener('mouseup',e=>{
drawing = false;
});

cvs.addEventListener('mousemove',e=>{
  if(!drawing) return false;
ctx.beginPath();
ctx.moveTo(oldX,oldY);
ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
oldX = e.offsetX;
oldY = e.offsetY;
})