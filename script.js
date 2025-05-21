/*
The rules of tic tac toe

1. game is played on a 3x3 grid
2. only 2 players noted by pattern (X, O)
3. first player to get 3 of their marks in a row (up, down, across, diagonally) wins
4. when 9 squares are filled and no player has 3 marks in a row game ends in a tie
*/

//Accessing the body of the html file
const body = document.querySelector("body")

// Creating a div with the class of gameBoard and adding it to the body
let gameBoard = document.createElement("div")
gameBoard.classList.add('gameBoard')

// Creating a table to add to the gameBoard Div
// Creating the rows and squares for the tic tac toe board
let game = ['','','','','','','','','']
for (let move of game) {
    let box = document.createElement("div")
    box.textContent = move;
    box.classList.add('box')
    gameBoard.appendChild(box)  
}
body.appendChild(gameBoard)


// User enters what they pattern they want to start as
// variable that keeps track of current player
// let player = x once turn happens the switch to player being O

// const winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]