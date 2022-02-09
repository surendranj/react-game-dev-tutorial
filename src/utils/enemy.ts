import { EnemyConfig } from "../types/npc-movement";

class Enemy {
    ctx = this.config.ctx;
    canvasWidth = this.config.canvasWidth;
    canvasHeight = this.config.canvasHeight;
    spriteWidth = 266;
    spriteHeight = 188;
    width = this.spriteWidth / 6;
    height = this.spriteHeight / 6;
    x = Math.random() * (this.canvasWidth - this.width);
    y = Math.random() * (this.canvasHeight - this.height);
    enemySpeed = Math.random() * 4 + 1;
    enemyImg = this.config.enemyImg;
    frame = 0;
    gameFrame = 0;
    flapSpeed = Math.floor(Math.random() * 3 + 1);
    angle = Math.random() * 2;
    angleSpeed = Math.random() * 0.2;
    // i think this is amplitude of sine wave
    curve = Math.random() * 7;

    constructor(public config: EnemyConfig) {}

    update() {
        this.x -= this.enemySpeed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) {
            this.x = this.canvasWidth;
        }
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
