import { LayerConfig } from "../types/parallax-types";

class Layer {
    image = this.config.image;
    x = 0;
    y = 0;
    canvasWidth = 640;
    canvasHeight = 360;
    width = this.canvasWidth;
    height = this.canvasHeight;
    speedModifier = this.config.speedModifier;
    speed = this.config.gameSpeed * this.speedModifier;
    ctx = this.config.ctx;

    constructor(public config: LayerConfig) {}

    update() {
        this.speed = this.config.gameSpeed * this.speedModifier;

        if (this.x <= -this.width) {
            this.x = 0;
        }

        this.x = this.x - this.speed;
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export default Layer;
