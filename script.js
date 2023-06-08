let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 240;
let y = 160;
let dy = 1;
let dx = 1;
let raquetX = 460;
let raquetY = 120;
downPressed = false;
upPressed = false;

//callback pasar una funcion como parametro a otra
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    //alert(e.keyCode);
    if(e.keyCode == 40){
        downPressed = true;
    }
    else if(e.keyCode == 38){
        upPressed = true;
    }
}

    function keyUpHandler(e){
        //alert(e.keyCode);
        if(e.keyCode == 40){
            downPressed = false;
        }
        else if(e.keyCode == 38){
            upPressed = false;
        }
    }

 /*para dibujar la pelota */
function drawBall()
        {
            ctx.beginPath();
            /*para dibujar circulos arc */
            ctx.arc(x, y, 10, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(10, 120, 10, 80);
            ctx.rect(raquetX, raquetY, 10, 80);
            ctx.fillStyle = "#0095DD"
            ctx.fill();
            ctx.closePath();
        }
    /*para dibujar la raqueta 1 */
    function drawRaquet(){
        ctx.beginPath();
        ctx.rect(10, 10, 50, 10);
        ctx.fillStyle = "#0095DD"
        ctx.fill();
        ctx.closePath();
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
          }
          
        function draw()
        {
            ctx.clearRect(0, 0, 480, 320);
            drawBall();
            if(y >= 310){
                dy = dy*(-1);
            }
            x = x + dx;
            y = y + dy;
            if(downPressed == true)
                raquetY+=2;
            if(upPressed == true)
                raquetY-=2;
        }
        setInterval(draw, 20);