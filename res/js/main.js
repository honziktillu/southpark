const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "./res/img/background.png";
const image = new Image();
image.src = "./res/img/zombies/zombie1.png";
canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(200, 100, 150, 100);

ctx.strokeStyle = "red";
ctx.strokeRect(200, 300, 150, 100);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(150, 70);
ctx.lineTo(200, 20);
ctx.lineTo(50, 50);
ctx.fill();

let x = 450;
let y = 100;
let width = 60;
let height = 100;

window.onload = () => {
    ctx.drawImage(background, 0, 0, 1280, 720);
    ctx.drawImage(image, x, y, 60, 100);
    setInterval(() => {
        y += 1;
        x -= 0.5;
        width++;
        height++;
        ctx.drawImage(background, 0, 0, 1280, 720);
        ctx.drawImage(image, x, y, width, height);
        console.log(x);
    }, 100);
}

