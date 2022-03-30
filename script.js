// 1. Prompt Play Game, Enter Rock, Paper, Scissors:
//      - Rock beats scissors
//      - Scissors beats Paper
//      - Paper beats Rock 
// 2. Once letter entered
//      - Compare letter to Bot letter
//          - botLetter = math.floor(math.random()*3)
//              - 0 = R, 1 = P, 2 = S 
//          - playerLetter = prompt() 
// 
var scoreboard = {
    scorePlayer: 0,
    scoreBot: 0,
};
//mayber name this pick letter
function playGame () {
    let message = window.prompt("Please enter either r, p, or s", "");
    if (message === 'r') {
        confirm('Game on')
        return 'r'
        
    }
    else if (message === 'p') {
        confirm('Game on')
        return 'p'
    }
    else if (message === 's') {
        confirm('Game on')
        return 's'
    }
    else{
        confirm('Please use r, p or s')
    }
  }
//starts game and enters choice to console.log 
var playerLetter = playGame()
console.log(playerLetter);

//random number between 0 and 2 
function botLetter() {
    var RPS = 'rps'
    return RPS[Math.floor(Math.random()*RPS.length)] 
    
}
console.log(botLetter())








