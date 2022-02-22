var bodyLink;
var buttonPressed = false;


//Stuff to look into:

//setInterval
// var timer = setInterval(() => {
//     document.getElementById('element0').innerHTML += '<h1>Hi</h1>';
// }, 1000);
// clearInterval(timer);


// setTimeout
// clearTimeout

function makeWebpage(){
    

    for (let i = 0; i < 10; i++) {
        var element = document.createElement('div');
        element.id = "element" + i;
        element.setAttribute('class', 'card');
        element.addEventListener('mousedown', {
            handleEvent(event) {
            setTimeout(clickedOnDiv, 500);
            }
        });
        element.innerHTML = '<h1>Hi this is div number: ' + i +"</h1><br><button onclick='returnRandomNumber()' id='button" + i + "' style='width: 400px; height: 400px;'>press me</button>";
        document.getElementById('insertPlace').appendChild(element);
        console.log(element);
    }
}

function returnRandomNumber() {
    var random = Math.floor(Math.random() * 10) + 1;
    alert("random number is: " + random);
    buttonPressed = true;
}

function clickedOnDiv(){
    if(buttonPressed) {
        return;
    }
    else {
alert("clicked not button");
        buttonPressed = false;
    }
}
makeWebpage();

