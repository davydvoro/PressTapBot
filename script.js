let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const slipper = document.getElementById('slipper');
    const scoreElement = document.getElementById('score');
    const gameArea = document.querySelector('.game-area');

    if (!slipper || !scoreElement || !gameArea) {
        console.error('Не удалось найти необходимые элементы на странице.');
        return;
    }

    function getRandomPosition(element) {
        const x = gameArea.clientWidth - element.clientWidth;
        const y = gameArea.clientHeight - element.clientHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function moveSlipper() {
        const [x, y] = getRandomPosition(slipper);
        slipper.style.left = `${x}px`;
        slipper.style.top = `${y}px`;
    }

    slipper.addEventListener('click', () => {
        score += 1;
        scoreElement.textContent = score;
        moveSlipper();
    });

    moveSlipper();
});
