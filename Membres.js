var canvas = document.getElementById("image_grattage");
var ctx = canvas.getContext("2d");
var img = new Image();
img.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.stroke();
};
img.src = "Im_membres/grattage.png";
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(0, 0, 0, 0);




var flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;
    
w = 500;
h = 500;

canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
}, false);
canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
}, false);
canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
}, false);
canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
}, false);

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = "rgba(0, 0, 200, 0.5)";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

function findxy(res, e) {
    ctx.clearRect(0,0,100,50);
    //console.log(`${res}.`);
    if (res == 'down') { /* si on gratte */
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}