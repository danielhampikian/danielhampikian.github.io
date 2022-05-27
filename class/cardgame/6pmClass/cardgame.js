//game logic variables::
//Card Data -> index: 0: attack 1: defense 2: name
var playerCardArray = [[0, 0, ""], [0, 0, ""], [0, 0, ""]];
var opponentCardArray = [[0, 0, ""], [0, 0, ""], [0, 0, ""]];
var pictures = ['bunny.jpeg', 'dog.jpeg', 'loc.jpg', 'sas.jfif', 'stork.jpg', 'spi.jpg'];
var playerHealth = 30;
var opponentHealth = 30;
//Card Visual Appearance -> display variables
var attackValues;
var defenseValues;
var pictureDisp;
var playerHealthDisp;
var opponentHealthDisp;
var titlesDisp;

function groupsCreativeAbility(idx) {
    if (idx == 1) {
        //you have the middle card
    }
    console.log("Create a special ability or something that the buttons do only once per turn")
}

function initGame() {
    pictureDisp = document.getElementsByClassName('card-img-top');
    attackValues = document.getElementsByClassName('attack');
    defenseValues = document.getElementsByClassName("defense");
    playerHealthDisp = document.getElementById("player-health");
    opponentHealthDisp = document.getElementById("opponent-health");
    titlesDisp = document.getElementsByClassName('card-title');

    for (let i = 0; i < attackValues.length; i++) {
        var atV = parseInt(Math.random() * 7 + 1);
        var dfV = parseInt(Math.random() * 12 + 1);
        var picIndex = parseInt(pictures.length * Math.random());

        if (i < 3) {
            opponentCardArray[i][0] = atV;
            opponentCardArray[i][1] = dfV;
            pictureDisp[i].src = pictures[picIndex];
            opponentCardArray[i][2] = titlesDisp[i].innerHTML;
           


        }
        else {
            playerCardArray[i - 3][0] = atV;
            playerCardArray[i - 3][1] = dfV;
            pictureDisp[i].src = pictures[picIndex];
            playerCardArray[i - 3][2] = titlesDisp[i].innerHTML;
            

        }
        
    }
    updateDisplay();
}

    function updateDisplay() {
        playerHealthDisp.innerHTML = "Player Health: " + playerHealth;
        opponentHealthDisp.innerHTML = "Opponent Health: " + opponentHealth;
        for (let i = 0; i < attackValues.length; i++) {
            if (i < 3) {
                attackValues[i].innerHTML = "Attack: " + opponentCardArray[i][0];
                defenseValues[i].innerHTML = "Defense: " + opponentCardArray[i][1];
                titlesDisp[i].innerHTML = opponentCardArray[i][2];
            }
            else {
                attackValues[i].innerHTML = "Attack: " + playerCardArray[i - 3][0];
                defenseValues[i].innerHTML = "Defense: " + playerCardArray[i - 3][1];
                titlesDisp[i].innerHTML = playerCardArray[i-3][2];
            }
        }
    }
    function aiChoice() {
        console.log("Code an ai choice about what to do with the buttons on the AI side");
        var choice = parseInt(Math.random() * 4 + 1);
        if (choice == 1) {
            //this will happen 25% of the time
        }
        else {
            //this will happen 75% 
        }
        

    }

    function cardBattle() {
        aiChoice();

        for (let i = 0; i< playerCardArray.length; i++) {
            playerCardArray[i][1] -= opponentCardArray[i][0];
            opponentCardArray[i][1] -= playerCardArray[i][0];
            if (playerCardArray[i][1]<1) {
                if (playerCardArray[i][2] == "ZOMBIE ATTACKER") {
                    playerHealth -= opponentCardArray[i][0];
                }
                else {
                    playerCardArray[i][2] = "ZOMBIE ATTACKER";
                }
            }
            if (opponentCardArray[i][1]<1) {
                if (opponentCardArray[i][2] == "ZOMBIE ATTACKER") {
                    opponentHealth -= playerCardArray[i][0];
                }
                else {
                   opponentCardArray[i][2] = "ZOMBIE ATTACKER";
                }
            }
            checkGameOver();
        }
        //1. needs to loop through all  card values for attack and defense
        //subtract attack from defense
            //a take into account button press choice of player
        //2. If creature defense is less than 1: check if any creatures are dead, if they are:
        //a. subtract the attack value of creature from the other player's health
        //b. if not, if that creature just died, make them dead
        //3. If player health is less than 1, check game over conditions
        //a. if both players are less than 1 on the same turn, it's a tie
        //b. if one player is and the other isn't, the other player wins.

        updateDisplay();
       
    }
    function checkGameOver() {
        if (playerHealth < 1 && opponentHealth < 1) {
            console.log("Tie");
        }
        else if (playerHealth < 1) {
            console.log("Player Loses");

        }
        else if (opponentHealth < 1) {
            console.log("Player Wins");
        }
    }

    initGame();