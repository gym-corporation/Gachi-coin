let score = 0;

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = 'Score: ${score}';
});