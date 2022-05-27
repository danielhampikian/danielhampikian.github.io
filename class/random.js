var inputMin;
var inputMax;
var displayNum;


function randomSpin() {
    var timesRun = 0;
    var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 10){
        clearInterval(interval);
    }
    displayRandom();
}, 500); 
}

function displayRandom() {
    displayNum = document.getElementById('displayNum');
    let output = parseInt(getRndInteger());
    console.log(output);
    displayNum.innerHTML = "Your random number is: " + output;

}

function displayItems(output){
    for(let i=0; i<output; i++) {
        var card = document.createElement('div');
        card.style.backgroundColor = 'red';
        card.style.height = '200px';
        card.style.width = '200px';
        card.style.margin = '20px';
        card.style.borderRadius = '50%';
        displayNum.appendChild(card);
    }
}
//write a random number between min and max including both numbers
//math.floor insures we round down to the nearest integer
function getRndInteger() {
    inputMin = parseInt(document.getElementById('minInput').value);
    inputMax = parseInt(document.getElementById('maxInput').value);
    console.log(inputMin);
    return Math.floor(Math.random() * (inputMax - inputMin + 1) ) + inputMin;
}
//returns between 0 and max including 0 and max, and including decimals
function pureRandom(max) {
    return Math.random() * max + 1;
}


function randomNum() {
    var displayPlace = document.getElementById('displayNum');
    displayPlace.addEventListener('click', rollDice);
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log('Random number is: ' + randomNumber);
    displayPlace.innerHTML = 'Random Number Result: ' + randomNumber;
}

function rollDice(){
    alert('Dice is rolled');
}

randomNum();




