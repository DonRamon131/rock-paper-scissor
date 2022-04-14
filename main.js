let rpsComputer = ['rock', 'paper', 'scissor'];

/*Function that returns a random value from arr*/
function computerPlay(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

/*created variable  to track rounds, wins, loses, and ties*/
let round = 0; let tie = 0; let win = 0; let lose = 0; 

/*creating an instance div_o that gets id "divo"*/
let div_o = document.getElementById('divo');

/*creating instances that get id of rounds played, wins, loses*/
let round_o = document.getElementById('roundo');
let tie_o = document.getElementById('tieo');
let win_o = document.getElementById('wino');
let lose_o = document.getElementById('loseo');

/*Function that compares player selection and computer selection*/
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == 'ROCK') && (computerSelection == 'paper') ) {
        div_o.textContent += 'You Lose! Paper beats Rock\r\n';
        round++;
        lose++;
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'scissor') ) {
        div_o.textContent += 'You Win! Rock beats Scissor\r\n';
        round++;
        win++;
    }
    else if ( (playerSelection == 'ROCK') && (computerSelection == 'rock') ) {
        div_o.textContent += 'You Tie! Rock = Rock\r\n';
        round++;
        tie++;
    }

    else if ( (playerSelection == 'PAPER') && (computerSelection == 'rock') ) {
        div_o.textContent += 'You Win! Paper beats Rock\r\n';
        round++;
        win++;
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'scissor') ) {
        div_o.textContent += 'You Lose! Scissor beats Paper\r\n';
        round++;
        lose++;
    }
    else if ( (playerSelection == 'PAPER') && (computerSelection == 'paper') ) {
        div_o.textContent += 'You Tie! Paper = Paper\r\n';
        round++;
        tie++;
    }

    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'paper') ) {
        div_o.textContent += 'You Win! Scissor beats Paper\r\n';
        round++;
        win++;
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'rock') ) {
        div_o.textContent += 'You Lose! Rock beats Scissor\r\n';
        round++;
        lose++;
    }
    else if ( (playerSelection == 'SCISSOR') && (computerSelection == 'scissor') ) {
        div_o.textContent += 'You Tie! Scissor = Scissor\r\n';
        round++;
        tie++;
    }
}

/*assigning computerPlay() function to variable call and passing rpsComputer as argument*/
let call = computerPlay(rpsComputer);

let rock_button = document.getElementById("rocko");
let paper_button = document.getElementById("papero");
let scissors_button = document.getElementById("scissorso");

rock_button.addEventListener('click', e => {
    playRound(playerSelection='ROCK',call); } 
  );

paper_button.addEventListener('click', e => {
    playRound(playerSelection='PAPER',call);}
  );

scissors_button.addEventListener('click', e => {
    playRound(playerSelection='SCISSOR',call);}
  );