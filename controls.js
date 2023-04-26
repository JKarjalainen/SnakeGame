document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            snake.changeDirection("Up");
            break;
        case "ArrowDown":
            snake.changeDirection("Down");
            break;
        case "ArrowLeft":
            snake.changeDirection("Left");
            break;
        case "ArrowRight":
            snake.changeDirection("Right");
            break;
    }
});
