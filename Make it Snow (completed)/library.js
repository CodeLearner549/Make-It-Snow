//Random Library

//Return random decimbal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

//Return a random integer between low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

//Return a random rgb color - 'rgb( , , ,)'
function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(
    0,
    256
  )})`;
}

//Graphics Library
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

function fill(color) {
  ctx.fillStyle = color;
}

//Draw a line
/*ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
line();*/

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

//Draw a Rectangle
/*ctx.fillStyle = "orange";
ctx.fillRect(100, 100, 200, 50);*/

function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

//Draw a Circle

function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

//Draw Triangle
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

//Draw Text
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

//Draw Ellipse
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

//Draw Image
function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}
