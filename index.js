const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('start-btn')
const endBtn = document.getElementById('end-btn')
const game = document.querySelector('.whack-mole')

let score = 0;
let moleInterval;
let gameHasEnded = true

function createMoleImage() {
    const moleImage = document.createElement('img');
    moleImage.src = 'gopher.png'; // Replace with the path to your mole image
    moleImage.alt = 'Mole';
    return moleImage;
}

function startGame() {
    moleInterval = setInterval(() => {
        createMole();
    }, 1000);
}

function createMole() {
    if (gameHasEnded) return
    game.style.display = 'block'
    const moles = document.querySelectorAll('.mole')
    if (moles.length < 3){
        var mole = document.createElement('div');
    }

    mole.className = 'mole';
    mole.style.left = `${getRandomPosition()}px`;
    mole.style.top = `${getRandomPosition()}px`;

    mole.appendChild(createMoleImage());

    mole.addEventListener('click', () => {
        whackMole(mole);
    });

    gameContainer.appendChild(mole);

    setTimeout(() => {
        gameContainer.removeChild(mole);
    }, 1000);
}

function getRandomPosition() {
    return Math.floor(Math.random() * 250);
}

function whackMole(mole) {
    gameContainer.removeChild(mole);
    score++;
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

startBtn.addEventListener('click', ()=>{
    startGame();
    gameHasEnded = false
    startBtn.style.display = 'none'
    endBtn.style.display = 'block'
})

endBtn.addEventListener('click', ()=>{
    game.style.display = 'none'
    startBtn.style.display = 'block'
    endBtn.style.display = 'none'
    gameHasEnded = true
})
