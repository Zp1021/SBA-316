let yesOption = document.getElementById('yes')
let noOption = document.getElementById('no')
let message = document.getElementById('message')
//traverse from the button option of no to the submit button
let submitButton = noOption.nextElementSibling.nextElementSibling
// further traverses to access the checkbox
let checkBox = submitButton.nextElementSibling.nextElementSibling

// When clicking the yes button creates a required field on the checkbox
// and prints a message on the html page
function yesGame(){
    message.innerHTML = "Click continue"
    checkBox.required = true;
}

// Shows an alert letting the user know what to do next
function noGame() {
    window.alert("You should really hit the yes button")
}

// Starts the game if the checkbox is checked and the submit button is hit
// otherwise it doesn't even generate the next page
function startGame(event) {
    if(!checkBox.checked) {
        event.preventDefault()
    } else{
        window.open('game.html')
    }
}

submitButton.addEventListener('click',startGame)