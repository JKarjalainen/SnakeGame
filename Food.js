class Food {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, SCALE, SCALE);
        ctx.closePath();
    }

    pickNewPos() {
        this.x = Math.floor((Math.random() * canvas.width) / SCALE) * SCALE;
        this.y = Math.floor((Math.random() * canvas.height) / SCALE) * SCALE;

        // Prevent the food from spawning on the snake
        for (let i = 0; i < snake.tail.length; i++) {
            if (this.x === snake.tail[i].x && this.y === snake.tail[i].y) {
                this.pickNewPos();
            }
        }
    }
}
