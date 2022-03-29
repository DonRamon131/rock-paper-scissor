let rpsComputer = ['rock', 'paper', 'scissor'];
/*let rpsPlayer = prompt("Choose one: Rock - Paper - Scissor");*/

/*Function that returns a random value from arr*/
function computerPlay(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

/*Function that compares player selection and computer selection*/
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == 'ROCK') && (computerSelection == 'paper') ) {
        console.log('You Lose! Paper beats Rock');
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'scissor') ) {
        console.log('You Win! Rock beats Scissors');
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'rock') ) {
        console.log('You tie! Rock = Rock');
    }

    else if ( (playerSelection == 'PAPER') && (computerSelection == 'rock') ) {
        console.log('You Win! Paper beats Rock');
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'scissor') ) {
        console.log('You Lose! Scissor beats Paper');
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'paper') ) {
        console.log('You tie! Paper = Paper');
    }

    if ( (playerSelection == 'SCISSOR') && (computerSelection == 'paper') ) {
        console.log('You Win! Scissor beats Paper');
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'rock') ) {
        console.log('You Lose! Rock beats Scissor');
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'scissor') ) {
        console.log('You tie! Scissor = Scissor');
    }
}
let rock_button = document.getElementById('rocko');
let paper_button = document.getElementById('papero');
let scissors_button = document.getElementById('scissorso');

/*Main function
function game() {
    for (let i = 0; i < 5; i++) {
        let rpsPlayer = prompt("Choose one: Rock - Paper - Scissor");
        playRound(rpsPlayer.toUpperCase(), computerPlay(rpsComputer));
     }
}
game();
*/


/*Calling computerPlay() function and passing rpsComputer as argument*/
computerPlay(rpsComputer);

/*Calling play() function that compares rpsPlayer and the returned value from computerPlay() function*/
playRound(rpsPlayer.toUpperCase(), computerPlay(rpsComputer));