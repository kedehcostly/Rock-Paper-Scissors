let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div =document.querySelector('.score-board');
const results_p =document.querySelector('.results > p');
const rock_div =document.getElementById('r');
const paper_div =document.getElementById('s');
const scissors_div =document.getElementById('t');

function getComputerChioce(){
    const chioces = ['r', 's', 't'];
    const randomNumber= (Math.floor(Math.random() * 3));
    return chioces[randomNumber];
}

function convertToword(letter)
{
    if (letter === 'r') return 'Rock';
    if (letter === 's') return 'Paper';
    return 'scissors';
}

function win(userChoice, computerChioce) {
    userScore++;
    userScore_span.innerHTML =userScore;
    computerScore_span.innerHTML =computerScore;
    results_p.innerHTML = convertToword(userChoice) +''beats'' + converToword(computerChioce) ''You Win!!!!'';

}

function lose() {
    userScore+++;
    
}

function Draw() {
    userScore+++;
    
}
function game(userChoice) {
    const computerChioce= getComputerChioce();
    switch (userChoice + computerChioce) {
    case 'rt':
    case 'sr':
    case 'ts':
        win(userChoice, computerChioce);
        break;
    case 'rs':
    case 'st':
    case 'tr':
        lose(userChoice, computerChioce);
        break;
        case 'rr':
        case 'ss':
        case 'tt':
          Draw(userChoice, computerChioce);
          break;
                    
    }

}

main();

function main() {

    rock_div.addEventListener('click', function(){
        game('r');
    })

    paper_div.addEventListener('click', function(){
        game('s');
    })

    scissors_div.addEventListener('click', function(){
        game('t');
    })
}