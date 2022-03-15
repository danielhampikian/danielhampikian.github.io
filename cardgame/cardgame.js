//game logic
var opponentCardArray = [[0, 0, 0,""], [0, 0, 0,""],[0, 0, 0,""]];
var playerCardArray = [[0, 0,0,""], [0, 0,0,""],[0, 0,0,""]];
var playerHealth = 10;
var opponentHealth = 10;
var images = ['animals.jpeg', 'dog.jpeg', 'fox.jpeg', 'racoon.jpeg', 'squirrel.jpeg', 'tiger.jpeg'];
var titles = ['animals', 'dog', 'fox', 'racoon', 'squirrtel', 'tiger'];
var gameOver = false;
//display elements:
var playerHealthDisp;
var opponentHealthDisp;
var cardsHealth;
var cardsAttack;
var cardsTitle;
var cardsImage;

function initGame(){

    playerHealthDisp = document.getElementById('player-health');
    opponentHealthDisp = document.getElementById('opponent-health');

    for (var i=0; i < playerCardArray.length; i++) {
        var card = playerCardArray[i];

        var damage = parseInt(Math.random() * 5) + 1;
        var health = 10-damage;
        card[0] = damage;
        card[1] = health;
        card[3] = "playerCard" + i;
        card[4] = images[i];
        card[5] = titles[i]
        //now we can access the card's invidual health and attack buttons and stats
    
    }
for (var i=0; i < opponentCardArray.length; i++) {
    var card = opponentCardArray[i];

    var damage = parseInt(Math.random() * 4) + 1;
    var health = 10-damage;
    card[0] = damage;
    card[1] = health;
    card[3] = "opponentCard" + i;
    card[4] = images[i+3];
    card[5] = titles[i+3];
    //now we can access the card's invidual health and attack buttons and stats

    }

    cardsAttack = document.getElementsByClassName('attack');
    cardsHealth = document.getElementsByClassName('health');
    cardsTitle = document.getElementsByClassName('card-title')
    cardsImage = document.getElementsByClassName("card-img-top");

   refreshCardDisp();
}

function refreshCardDisp() {
    for (let i = 0; i < cardsAttack.length; i++){
        
        if (i < 3) {
            //opponent cards
            var card = opponentCardArray[i];
            cardsAttack[i].innerHTML = card[0];
            cardsHealth[i].innerHTML = card[1];
            cardsImage[i].src = card[4]
            cardsTitle[i].innerHTML = card[5];
        }
        else {
            //player cards
            var card = playerCardArray[i-3];
            cardsAttack[i].innerHTML = card[0];
            cardsHealth[i].innerHTML = card[1];
            cardsImage[i].src = card[4]
            cardsTitle[i].innerHTML = card[5];
        }
    }
}




function cardBattle(){
    
    for (var i = 0; i<playerCardArray.length; i++) {
          opponentCardArray[i][1] -= playerCardArray[i][0];
          playerCardArray[i][1] -= opponentCardArray[i][0];
          if (opponentCardArray[i][1] < 1){
            opponentCardArray[i][5] = "I'm dead";
            opponentHealth += opponentCardArray[i][1]; //this will be negative and get culmitately subtracted
          }
          if(playerCardArray[i][1]<1) {
              playerHealth += playerCardArray[i][1];
              playerCardArray[i][5] = "I'm dead"
              playerHealth += playerCardArray[i][1]; //this will be negative and will be culmitagely subtracted
          }
    }
    checkGameOver();
    refreshCardDisp();
    refreshScore();
}

function refreshScore() {
    playerHealthDisp.innerHTML = "Player Health: " + playerHealth;
    opponentHealthDisp.innerHTML = "Opponent Health: " + opponentHealth;
}
function checkGameOver() {
    if (playerHealth < 0 && opponentHealth > 0) {
        gameOver = true;
        //showModal("You lost!", "Refresh your browser to play again.");
        console.log("You lost!", "Refresh your browser to play again.")
        //cardUpgradeRef.style.display = "none";
    }
    else if (opponentHealth < 0 && playerHealth > 0) {
        gameOver = true;
        //showModal("You won!", "Refresh your browser to play again.");
        console.log("You won!", "Refresh your browser to play again.");

        //cardUpgradeRef.style.display = "none";
    }
    else if (opponentHealth < 0 && playerHealthRef < 0) {
        gameOver = true;
        //showModal("It was a tie, both players died!", "Refresh your browser to play again");
        console.log("It was a tie, both players died!", "Refresh your browser to play again");

        //cardUpgradeRef.style.display = "none";
    }
}
initGame();
