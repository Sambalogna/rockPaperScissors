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
var wins = 0;
var ties = 0;
var losses = 0;

var playGame = function() {
    var playerLetter = pickLetter();
    var botLetter = getbotLetter();
    checkWinner(playerLetter, botLetter);
    alertStats();
    
}
function pickLetter () {
    var playerLetter = window.prompt("Please enter either r, p, or s");
    playerLetter = playerLetter.toUpperCase();
    if (playerLetter === 'R') {
        return playerLetter 
    }
    else if (playerLetter === 'P') {
        return playerLetter
    }
    else if (playerLetter === 'S') {
        return playerLetter
    }
    else{
        confirm('Please use r, p or s')
    }
  }
//random number between 0 and 2 
function getbotLetter() {
    var letters = ['R','P','S']
    var choice = Math.floor(Math.random()*letters.length)
    botLetter = letters[choice] 
    return botLetter
    
}
//checks winner or loser
function checkWinner (playerLetter, botLetter) {
    if (playerLetter === botLetter) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (playerLetter === "R" && botLetter === "S") || 
        (playerLetter === "P" && botLetter === "R") || 
        (playerLetter === "S" && botLetter === "P"))
        {
            wins++;
            window.alert("You win!");
    } else {
        losses++;
        window.alert("You lost!")
    }
    // playAgain();
    // alertStats();
}
function alertStats() {
    window.alert("Stats:\nWins: "+wins +"\nLosses: " + losses +"\nTies: "+ ties);
    if (confirm("play again?") == true) {
        playGame();
    }
}

playGame();







