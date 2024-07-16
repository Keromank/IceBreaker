const students = [
    'Student 1',
    'Student 2',
    'Student 3',
    'Student 4',
    'Student 5',
    'Student 6',
    'Student 7',
    'Student 8'
]

// Function to roll the dice
function rollDice(){
    const rolledNumber = Math.floor(Math.random() * 8) + 1;
    document.getElementById('diceResult').innerText = 'Rolled: ${rollednumber}';
    return rolledNumber;
}

// Function to handle the game logic
async function playGame() {
    const rolledNumber = rollDice();
    const student = students[rolledNumber - 1];
    const question = await getQuestion();

    document.getElementById('studentQuestion').innerText = `${student}, ask someone: "${question}"`;
}

// Event listener for the "Start Game" button
document.querySelector('.start a').addEventListener('click', (event) => {
    event.preventDefault();
    playGame();
});