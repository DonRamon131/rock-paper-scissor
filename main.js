let rpsComputer = ['rock', 'paper', 'scissor'];

/*Function that returns a random value from arr*/
function computerPlay(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}
/*creating an instance div_o that gets id "divo"*/
let div_o = document.getElementById('divo');

/*Function that compares player selection and computer selection*/
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == 'ROCK') && (computerSelection == 'paper') ) {
        div_o.textContent = 'You Lose! Paper beats Rock';
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'scissor') ) {
        div_o.textContent = 'You Win! Rock beats Scissor';
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'rock') ) {
        div_o.textContent = 'You Tie! Rock = Rock';
    }

    else if ( (playerSelection == 'PAPER') && (computerSelection == 'rock') ) {
        div_o.textContent = 'You Win! Paper beats Rock';
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'scissor') ) {
        div_o.textContent = 'You Lose! Scissor beats Paper';
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'paper') ) {
        div_o.textContent = 'You Tie! Paper = Paper';
    }

    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'paper') ) {
        div_o.textContent = 'You Win! Scissor beats Paper';
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'rock') ) {
        div_o.textContent = 'You Lose! Rock beats Scissor';
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'scissor') ) {
        div_o.textContent = 'You Tie! Scissor = Scissor';
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

paper_button.addEventListener('click', event => {
    playRound(playerSelection='PAPER',call);
  });

scissors_button.addEventListener('click', event => {
    playRound(playerSelection='SCISSOR',call);
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