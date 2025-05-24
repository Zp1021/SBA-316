# SBA-316
This project attempt to use multiple html and script files to traverse pages in an attempt to creat a makeshift a tic tac toe game.
The rules of tic tac toe are listed as such:

One: game is played on a 3x3 grid
Two: only 2 players noted by pattern (X, O)
Three: first player to get 3 of their marks in a row (up, down, across, diagonally) wins
Four: when 9 squares are filled and no player has 3 marks in a row game ends in a tie

The grid is created using a for loop that iterates through an array of empty strings and with each index of the array there is a div created to simulate the gameboard

There is an event listener that tracks player moves by starting with pattern X and then moving on to pattern O when interacting with the board

There is a buttton called reset that allows users to open up a new page to effectively reset the gameboard and start again

at the time of writing this the logic for determining the winner is still under construction