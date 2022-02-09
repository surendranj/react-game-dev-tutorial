import { EnemyConfig } from "../types/npc-movement";

class Enemy {
    ctx = this.config.ctx;
    spriteWidth = 293;
    spriteHeight = 155;
    width = this.spriteWidth / 6;
    height = this.spriteHeight / 6;
    x = Math.random() * (this.config.canvasWidth - this.width);
    y = Math.random() * (this.config.canvasHeight - this.height);
    // enemySpeed = Math.random() * 4 - 2;
    enemyImg = this.config.enemyImg;
    frame = 0;
    gameFrame = 0;
    flapSpeed = Math.floor(Math.random() * 3 + 1);

    constructor(public config: EnemyConfig) {}

    update() {
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        // animate frames/sprites
        if (this.gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? (this.frame = 0) : this.frame++;
        }
        this.gameFrame++;
    }

    draw() {
        // this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(
            this.enemyImg,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

export default Enemy;
