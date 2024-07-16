const students = [
    'Student 1',
    'Student 2',
    'Student 3',
    'Student 4',
    'Student 5',
    'Student 6',
    'Student 7',
    'Student 8'
];

// Function to roll the dice
function rollDice() {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');

    setTimeout(() => {
        dice.classList.remove('rolling');
        const rolledNumber = Math.floor(Math.random() * students.length) + 1;
        document.getElementById('diceResult').innerText = `Rolled: ${rolledNumber}`;
        playGame(rolledNumber);
    }, 1000);
}

// Function to get a question from Gemini API
async function getQuestion() {
    try {
        const response = await fetch('https://api.gemini.com/v1/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Replace with your actual API key
            }
        });
        const data = await response.json();
        return data.question; // Adjust based on the actual API response structure
    } catch (error) {
        console.error('Error fetching question:', error);
        return 'What is your favorite color?'; // Fallback question in case of error
    }
}

// Function to handle the game logic
async function playGame(rolledNumber) {
    const student = students[rolledNumber - 1];
    const question = await getQuestion();
    document.getElementById('studentQuestion').innerText = `${student}, ask someone: "${question}"`;
}

// Event listener for the "Start Game" button
document.querySelector('.start a').addEventListener('click', (event) => {
    event.preventDefault();
    rollDice();
});

// Event listener for the dice
document.getElementById('dice').addEventListener('click', () => {
    rollDice();
});

// Create and append dice result and student question elements to the container
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const diceResult = document.createElement('div');
    diceResult.id = 'diceResult';
    diceResult.style.fontSize = '2em';
    diceResult.style.marginTop = '1em';
    container.appendChild(diceResult);

    const studentQuestion = document.createElement('div');
    studentQuestion.id = 'studentQuestion';
    studentQuestion.style.fontSize = '2em';
    studentQuestion.style.marginTop = '1em';
    container.appendChild(studentQuestion);
});
