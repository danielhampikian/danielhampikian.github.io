var inputMin;
var inputMax;
var
//write a random number between min and max including both numbers
//math.floor insures we round down to the nearest integer

function displayRandom() {

}
function getRndInteger() {
    inputMin = document.getElementById('minInput');
    inputMax = document.getElementById('maxOutput');
    return Math.floor(Math.random() * (inputMax - inputMin + 1) ) + inputMin;
}
//returns between 0 and max including 0 and max, and including decimals
function pureRandom(max) {
    return Math.random() * max + 1;
}

