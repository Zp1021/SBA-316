/*
The rules of tic tac toe

1. game is played on a 3x3 grid
2. only 2 players noted by pattern (X, O)
3. first player to get 3 of their marks in a row (up, down, across, diagonally) wins
4. when 9 squares are filled and no player has 3 marks in a row game ends in a tie
*/

const body = document.querySelector("body")

let div = document.createElement("div")
div.classList.add('gameBoard')
body.appendChild(div)

let table = document.createElement("table")
div.appendChild(table)

for(i = 0; i < 3; i++){
    let tableRow = document.createElement("tr")
    table.appendChild(tableRow)
    for (j = 0; j < 3; j++){
        let td = document.createElement('td')
        tableRow.appendChild(td)
    }
}

// let gameBoard = document.getElementsByClassName("gameBoard")
// console.log(gameBoard)
// // body.appendChild(gameBoard)
// let table = document.createElement('table');
// console.log(table)
// gameBoard.appendChild(table);

// for (i = 0; i < 3; i++) {
//     let tableRow = document.createElement('tr');
//     table.appendChild(tableRow);
//     for(j = 0; j < 3; j++) {
//         let td = document.createElement('td');
//         tableRow.appendChild(td);
//     }
// }

// const winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]