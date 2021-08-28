// basic resize
function resize(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
}
// rotated rect
function drawRect(x, y, w, h, angle, col){
  ctx.save();
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.translate(x+w/2, y+h/2);
  ctx.rotate(angle * Math.PI/180);
  ctx.fillRect(-w/2, -h/2, w, h);
  ctx.restore();
}
// circle
function drawCirc(x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
// random canvas width
function randX(){
  return Math.random() * canvas.width;
}
// random canvas height
function randY(){
  return Math.random() * canvas.height;
}
//line
function drawLine(x, y, ex, ey, w, col, end) {
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineWidth = w;
  ctx.strokeStyle = col;
  if(end == 'butt' ||  "round" || "square") {
    ctx.lineCap = end;
  }
  ctx.lineTo(ex,ey);
  ctx.stroke();
  ctx.closePath();
}
function bezierCurve() {

}

