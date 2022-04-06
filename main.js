let rpsComputer = ['rock', 'paper', 'scissor'];

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

    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'paper') ) {
        console.log('You Win! Scissor beats Paper');
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'rock') ) {
        console.log('You Lose! Rock beats Scissor');
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'scissor') ) {
        console.log('You tie! Scissor = Scissor');
    }
}

/*assigning computerPlay() function to variable call and passing rpsComputer as argument*/
let call = computerPlay(rpsComputer);

let rock_button = document.getElementById("rocko");
let paper_button = document.getElementById("papero");
let scissors_button = document.getElementById("scissorso");

rock_button.addEventListener('click', event => {
    playRound(playerSelection='ROCK',call);
  });


/*Main function
function game() {
    for (let i = 0; i < 5; i++) {
        let rpsPlayer = prompt("Choose one: Rock - Paper - Scissor");
        playRound(rpsPlayer.toUpperCase(), computerPlay(rpsComputer));
     }
}
game();
*/