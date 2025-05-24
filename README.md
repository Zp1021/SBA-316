# SBA-316
This project attempts to use multiple html and script files to traverse pages in an attempt to create a makeshift a tic tac toe game.

There is a main page that will allow access to the game provided the user agrees to the terms
(NOTE: the required field does appear on the DOM of the checkbox however the warning does not show on the actual html page which is why the continue button does not work unless the checkbox is checked when the continue button is hit)

The rules of tic tac toe are listed as such:

One: game is played on a 3x3 grid
Two: only 2 players noted by pattern (X, O)
Three: first player to get 3 of their marks in a row (up, down, across, diagonally) wins
Four: when 9 squares are filled and no player has 3 marks in a row game ends in a tie

The grid is created using a for loop that iterates through an array of empty strings and with each index of the array there is a div created to simulate the gameboard

There is an event listener that tracks player moves by starting with pattern X and then moving on to pattern O when interacting with the board

There is a buttton called reset that allows users to open up a new page effectively resetting the gameboard and allowing players to start again however this functionality does get blocked as it is a pop-up. 

(NOTE: If the above does happen, either refresh the page or disable pop-up blockers to allow for the BOM functions to carry out task)

at the time of writing this the logic for determining the winner is still incomplete.