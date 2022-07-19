let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

//Array of random snowflakes
let snowflakes = [];
for (let i = 1; i <= 30; i++) {
  snowflakes.push(newRandomSnowflake());
}

function newRandomSnowflake() {
  return {
    x: randomInt(0, cnv.width),
    y: 0, //top
    r: randomInt(1, 10), //size
    v: 4 * Math.random() + 1, //this gives an original velocity for each iteration of the snowflake and can remain constant in moveSpeed
    //Math.random generates min: 0, max: 1
    color: "rgb(255, 255, 255)",
  };
}

requestAnimationFrame(draw);
function draw() {
  //Fill Canvas
  background("black");

  //Move and Draw All Snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    moveSnowflake(snowflakes[i]);
    drawSnowflake(snowflakes[i]);
  }

  requestAnimationFrame(draw);
}

function drawSnowflake(aSnowflake) {
  fill(aSnowflake.color);
  circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}

function moveSnowflake(aSnowflake) {
  //function given single iteration
  aSnowflake.y += aSnowflake.v; //speed and direction
  if (aSnowflake.y > cnv.height) {
    aSnowflake.y = -2;
  }
}

//Event
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.keyCode === 38) {
    snowflakes.push(newRandomSnowflake());
  } else if (event.keyCode === 40) {
    snowflakes.pop();
  }
}
