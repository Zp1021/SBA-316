/*
The rules of tic tac toe
1. game is played on a 3x3 grid
2. only 2 players noted by pattern (X, O)
3. first player to get 3 of their marks in a row (up, down, across, diagonally) wins
4. when 9 squares are filled and no player has 3 marks in a row game ends in a tie
*/

//Accessing the body of the html file
const body = document.querySelector('body');

// Creating a div with the class of gameBoard and adding it to the body
let gameBoard = document.createElement('div');
gameBoard.classList.add('gameBoard');

// Creating the rows and squares for the tic tac toe board using divs for each idex in the game array
let game = ['','','','','','','','',''];
for (let move of game) {
    let box = document.createElement('div');
    box.textContent = move;
    box.classList.add('box');
    gameBoard.appendChild(box) ; 
}
body.appendChild(gameBoard);

// Starts with player as X pattern and
// Tracks the clicks from user and switches between X and O patterns
let currentPlayer = 'X'
function gameMove(event) {
    if(event.target.classList.contains('box') && event.target.textContent === '') {
        event.target.textContent = currentPlayer;
    }

    if(currentPlayer === 'X'){
        currentPlayer = 'O';
        event.target.style.backgroundColor = 'purple'
    } else {
        currentPlayer = 'X';
        event.target.style.backgroundColor = 'lightblue'
    }
}
gameBoard.addEventListener('click', gameMove);

// Retrieving button by its ID and adding it to the DOM
let resetButton = document.getElementById('reset')
body.appendChild(resetButton)

// Function to reset the game
function gameReset(){
    console.log('the game has reset')
}

// Event listener to add functionality to reset button
resetButton.addEventListener('click', gameReset)