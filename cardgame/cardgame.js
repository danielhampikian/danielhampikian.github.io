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

   refreshCardDisp(1);
}

function refreshCardDisp() {
    for (let i = 0; i < cardsAttack.length; i++){
        
        if (i < 3) {
            //opponent cards
            var card = opponentCardArray[i];
            cardsAttack[i].innerHTML = card[1];
            cardsHealth[i].innerHTML = card[0];
        }
        else {
            //player cards
            var card = playerCardArray[i-3];
            cardsAttack[i].innerHTML = card[1];
            cardsHealth[i].innerHTML = card[0];
        }
    }
}
function refreshCardDisp(init) {
    for (let i = 0; i < cardsAttack.length; i++){
        
        if (i < 3) {
            //opponent cards
            var card = opponentCardArray[i];
            cardsAttack[i].innerHTML = card[1];
            cardsHealth[i].innerHTML = card[0];
            cardsImage[i].src = card[4]
            cardsTitle[i].innerHTML = card[5];
        }
        else {
            //player cards
            var card = playerCardArray[i-3];
            cardsAttack[i].innerHTML = card[1];
            cardsHealth[i].innerHTML = card[0];
            cardsImage[i].src = card[4]
            cardsTitle[i].innerHTML = card[5];
        }
    }
}

function attacker(index){
    if(playerCardArray[index][3]!=0)
    {
        playerCardArray[index][0] += parseInt(Math.random() * 2) + 1;
    }
    playerCardArray[index][3]=0;
    disableButtons(index);
    refreshCardDisp();
    
}
function defender(index){
    if(playerCardArray[index][3]!=1)
    {
        playerCardArray[index][1] += parseInt(Math.random() * 2) + 1;
    }
    disableButtons(index);
    refreshCardDisp();
}

function disableButtons(index) {
    let at = 'attack'+index;
    let df = 'defend'+index;
document.getElementById(at).disabled = true;
document.getElementById(df).disabled = true;
}

function enableButtons(index) {
    let at = 'attack'+index;
    let df = 'defend'+index;
document.getElementById(at).disabled = false;
document.getElementById(df).disabled = false;
}

function AIChoice(){
    for (var i = 0; i<opponentCardArray.length; i++) {
        let enemyChoice = parseInt(Math.random() * 2) + 1;
        console.log("Enemy choice: " + enemyChoice);
        if(enemyChoice == 1) {
            opponentCardArray[i][0] += parseInt(Math.random() * 2) + 1;
        }
        else {
            opponentCardArray[i][1] += parseInt(Math.random() * 2) + 1;
        }
    }
}



function cardBattle(){
    AIChoice();
    
    for (var i = 0; i<playerCardArray.length; i++) {
        
          opponentCardArray[i][1] -= playerCardArray[i][0];
          playerCardArray[i][1] -= opponentCardArray[i][0];
          if (opponentCardArray[i][1] < 1){
            
            if(opponentCardArray[i][5]=="I'm dead, Zombie attacker") {
            opponentHealth -= playerCardArray[i][0]; 
            }
            opponentCardArray[i][5] = "I'm dead, Zombie attacker";
            opponentCardArray[i][4] = "bunny.jpeg";
          }
          if(playerCardArray[i][1]<1) {
              playerHealth += playerCardArray[i][1];
              
              if(playerCardArray[i][5] == "I'm dead, Zombie attacker") {
              playerHealth -= opponentCardArray[i][0]; 
              }
              playerCardArray[i][5] = "I'm dead, Zombie attacker"
              playerCardArray[i][4] = "bunny.jpeg";
          }
          enableButtons(i);
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
        showModal("You lost!", "Refresh your browser to play again.");
        console.log("You lost!", "Refresh your browser to play again.")
        //cardUpgradeRef.style.display = "none";
    }
    else if (opponentHealth < 0 && playerHealth > 0) {
        gameOver = true;
        showModal("You won!", "Refresh your browser to play again.");
        console.log("You won!", "Refresh your browser to play again.");

        //cardUpgradeRef.style.display = "none";
    }
    else if (opponentHealth < 0 && playerHealth < 0) {
        gameOver = true;
        showModal("It was a tie, both players died!", "Refresh your browser to play again");
        console.log("It was a tie, both players died!", "Refresh your browser to play again");

        //cardUpgradeRef.style.display = "none";
    }
}
function showModal(modalTitle, info){
    document.getElementById("modalTitle").innerHTML = modalTitle;
    document.getElementById("runningPlayerScore").innerHTML = "Player health: " + playerHealth;
    document.getElementById("runningComputerScore").innerHTML = "Computer health: " + opponentHealth;
    document.getElementById("additionalInfo").innerHTML = info;
    $("#modalDisp").modal({
        backdrop: 'static',
        keyboard: false
      });
  }
  function loadGame(){
      window.location.reload();
  }
initGame();
