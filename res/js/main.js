const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "./res/img/background.png";

//promenna pro ukladani vstupu z klavesnice
// Space: true
// Space: false
const keys = {};

// Funkce, ktera posloucha na nejakou akci (event)
document.addEventListener("keydown", (e) => {
    keys[e.code] = true; // klavesa: true
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false; // klavesa: false
});

//Herni smycka
const gameLoop = () => {

    //resizeCanvas
    resizeCanvas();

    //clearCanvas
    clearCanvas();

    //update
    update();

    //render
    render();

    //fps
    getFps();

    window.requestAnimationFrame(gameLoop);
}

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
}

const clearCanvas = () => {
    //premalujeme cele platno pozadim hry
    ctx.drawImage(background, 0, 0, 1280, 720);
}

const update = () => {}
const render = () => {}
const getFps = () => {}

//kdyz se nacte stranka, tak se provede fce
window.onload = () => {

    //jakmile se stranka nacte, vyzadame si prvni snimek herni smycky
    window.requestAnimationFrame(gameLoop);
}