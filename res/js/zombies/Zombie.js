export class Zombie {

    constructor(name, hp, dmg, speed) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
    }

    walk() {
        console.log(`${this.name} is walking...`)
    }

}