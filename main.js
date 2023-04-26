let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let snake = new Snake();
let food = new Food(SCALE, SCALE, FOOD_COLOR);
let score = 0;

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    snake.checkCollision();
    snake.checkWallCollision();
    food.draw();
    updateScore();

    if (snake.eat(food)) {
        food.pickNewPos();
    }
}

function updateScore() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

setInterval(main, 1000 / 10);
