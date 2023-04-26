class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.tail = [];
    }

    draw() {
        ctx.fillStyle = SNAKE_COLOR;
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, SCALE, SCALE);
        }

        ctx.fillRect(this.x, this.y, SCALE, SCALE);
    }

    update() {
        // Move the tail to the position of the previous tail segment
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        // Update the last tail segment to the current position of the head
        this.tail[this.tail.length - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed * SCALE;
        this.y += this.ySpeed * SCALE;
    }

    checkCollision() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.tail = [];
            }
        }
    }

    checkWallCollision() {
        if (
            this.x < 0 ||
            this.x > canvas.width - SCALE ||
            this.y < 0 ||
            this.y > canvas.height - SCALE
        ) {
            this.reset();
        }
    }

    eat(food) {
        if (this.x === food.x && this.y === food.y) {
            this.tail.push({ x: this.x, y: this.y });
            score++;
            return true;
        }
        return false;
    }

    changeDirection(direction) {
        // Prevent the snake from reversing
        if (this.xSpeed === -1 && direction === "Right") return;
        if (this.xSpeed === 1 && direction === "Left") return;
        if (this.ySpeed === -1 && direction === "Down") return;
        if (this.ySpeed === 1 && direction === "Up") return;

        switch (direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -1;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = 1;
                break;
            case "Left":
                this.xSpeed = -1;
                this.ySpeed = 0;
                break;
            case "Right":
                this.xSpeed = 1;
                this.ySpeed = 0;
                break;
        }
    }

    reset() {
        this.tail = [];
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        score = 0;
        updateScore();
        food.pickNewPos();
    }
}
