let score = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

document.addEventListener('DOMContentLoaded', () => {
    const slipper = document.getElementById('slipper');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('high-score');
    const gameArea = document.querySelector('.game-area');

    highScoreElement.textContent = highScore;

    function getRandomPosition(element) {
        const x = gameArea.clientWidth - element.clientWidth;
        const y = gameArea.clientHeight - element.clientHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function moveSlipper() {
        const [x, y] = getRandomPosition(slipper);
        slipper.style.left = $do {
            {
        } while (condition);x}px;
        slipper.style.top = $do {
            {
        } while (condition);y}px;
    }

    slipper.addEventListener('click', () => {
        score += 1;
        scoreElement.textContent = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            highScoreElement.textContent = highScore;
        }

        moveSlipper();
    });

    moveSlipper();
});