export class Zombie {
  //static - dana vec patri tride - volame pomoci - NazevTridy.neco - Zombie.zombiesData
  static zombiesData;

  //v tomto atributu se budou ukladat vsechny zombies
  static zombies = [];

  constructor(name, hp, speed, path) {
    this.name = name;
    this.hp = hp;
    this.speed = speed;
    this.img = new Image();
    this.path = path;
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 100 * this.ratio,
      height: 200 * this.ratio,
    };
    this.position = {
      x: 600,
      y: 180,
    };
    this.velocity = {
      x: 1,
      y: 1,
      ratio: 0.005,
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  //metoda slouzici pro chozeni
  walk() {
    //pozici x posouvame o ulozenou silu (velocitu)
    this.position.x -= this.velocity.ratio * 35;
    this.position.y += this.velocity.y;

    //prenastavime vetsi ratio - opticka zmena pro zombika - vypada vetsi
    this.ratio += this.velocity.ratio;

    //prenastavujeme rozmer podle noveho ratia
    this.size = {
      width: 100 * this.ratio,
      height: 200 * this.ratio,
    };
  }

  //metoda ktera slouzi pro aktualizace zombika
  update() {
    this.walk();
  }

  static genZombies() {
    Zombie.zombiesData.map((zombie) => {
      Zombie.zombies.push(
        new Zombie(
          zombie.name, 
          zombie.hp,
          zombie.speed,
          zombie.path
          )
        );
    });
  }
}
