import { Zombie } from "./zombies/Zombie.js";
import { Background, Crosshair, Healthbar } from "./ui/basic-utils.js";

const background = new Background();
const crosshair = new Crosshair();
const healthbar = new Healthbar(100);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// [] - pole (array)
// {} - objekt (object)

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

let mouseX;
let mouseY;

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
  mouseY = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
});

document.addEventListener("click", (e) => {
  for (const zombie of Zombie.zombies) {
    if (
      zombie.position.x < crosshair.position.x + 50 &&
      zombie.position.x + zombie.size.width > crosshair.position.x + crosshair.size.width / 2  &&
      zombie.position.y < crosshair.position.y + 50 &&
      zombie.position.y + zombie.size.height > crosshair.position.y + crosshair.size.height / 2
    ) {
      zombie.respawn();
      break;
    }
  }
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
};

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};

const clearCanvas = () => {
  //premalujeme cele platno pozadim hry
  background.draw(ctx);
};

const update = () => {
  Zombie.zombies.map((zombie) => {
    zombie.update(healthbar);
  })
};
const render = () => {
  Zombie.zombies.map((zombie) => {
    zombie.draw(ctx);
  });
  crosshair.draw(ctx, mouseX, mouseY);
  healthbar.draw(ctx);
};
const getFps = () => {};

//funkce pro nacitani dat
const loadData = async () => {
  //nacteme soubor s daty pro zombies - await - cekame nez se nacte
  //pokud v nejake fci pouzivame await, tak funkci musime oznacit slovem async
  const zombiesFile = await fetch("./res/data/zombies.json");
  //prekonvertuje soubor na json
  const zombiesData = await zombiesFile.json();
  //Nastavime tride Zombies zombiesData
  Zombie.zombiesData = zombiesData;
};

//kdyz se nacte stranka, tak se provede fce
window.onload = async () => {
  await loadData();
  Zombie.genZombies();
  //jakmile se stranka nacte, vyzadame si prvni snimek herni smycky
  window.requestAnimationFrame(gameLoop);
};
