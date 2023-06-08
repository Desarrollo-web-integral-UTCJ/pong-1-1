let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 240;
let y = 160;
let dy = 1;
let dx = 1;
let raquetX = 460;
let raquetY = 120;
let raquet2X = 10;
let raquet2Y = 120;
let downPressed = false;
let upPressed = false;
let wPressed = false;
let sPressed = false;


// Callback pasar una función como parámetro a otra
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    //boton hacia abajo
  if (e.keyCode == 40) {
    downPressed = true;
    //boton hacia arriba
  } else if (e.keyCode == 38) {
    upPressed = true;
    //boton "W" del player 2 hacia arriba
  } else if (e.keyCode == 87) {
    wPressed = true;
    //boton "S" del player 2 hacia abajo
  } else if (e.keyCode == 83) {
    sPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 40) {
    downPressed = false;
  } else if (e.keyCode == 38) {
    upPressed = false;
  } else if (e.keyCode == 87) {
    wPressed = false;
  } else if (e.keyCode == 83) {
    sPressed = false;
  }
}

/*para dibujar la pelota */
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  /*para dibujar la raqueta 1 y 2 */
  ctx.rect(raquetX, raquetY, 10, 80);
  ctx.rect(raquet2X, raquet2Y, 10, 80);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// dibujar texto
// dibujar texto
function drawTexto() {
  ctx.fillStyle = "red";
  ctx.fillText("Jugador 1: 40", 0, 10);
}

/*para collisiones */
function collisions() {
  let distanceX = raquetX - x;

  if (distanceX < 0) {
    distanceX = -distanceX;
  }

  let distanceY = raquetY - y;

  if (distanceY < 0) {
    distanceY = -distanceY;
  }

  if (distanceX < 20 && distanceY < 50) {
    dx = -dx;
  }

  let distance2X = raquet2X - x;

  if (distance2X < 0) {
    distance2X = -distance2X;
  }

  let distance2Y = raquet2Y - y;

  if (distance2Y < 0) {
    distance2Y = -distance2Y;
  }

  if (distance2X < 20 && distance2Y < 50) {
    dx = -dx;
  }

  if (y >= 310 || y <= 10) {
    dy = -dy;
  }
}

function draw() {
  ctx.clearRect(0, 0, 480, 320);
  drawBall();
  drawTexto();

  if (downPressed && raquetY < 240) {
    raquetY += 2;
  }
  if (upPressed && raquetY > 10) {
    raquetY -= 2;
  }

  if (wPressed && raquet2Y > 10) {
    raquet2Y -= 2;
  }
  if (sPressed && raquet2Y < 240) {
    raquet2Y += 2;
  }

  x += dx;
  y += dy;

  collisions();
}

setInterval(draw, 10);