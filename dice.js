var numArray = [1,1,1,1,1,1];
var currentCubeClass = '';
var clicked = false;
var intID;

//gets called as soon as the window loads, adds event listeners to the dice
window.onload = function() {
    for(var i = 1; i <= 1; i++){
      var idName = 'placeholder'
      idName = idName + i;
      elem = document.getElementById(idName);
  
      elem.addEventListener('mousedown', {
          handleEvent(event) {
            //console.log("event type is: " + event.type);
            rolling(event.currentTarget.id);
          }
      });
  
      elem.addEventListener('mouseup', {
        handleEvent(event) {
          //console.log("event type is: " + event.type);
          rollEnd(event.currentTarget.id);
          }
      });
  
      elem.addEventListener('mouseleave', {
      handleEvent(event) {
        //console.log("event type is: " + event.type);
        mouseLeft(event.currentTarget.id);
          }
      });
    }
  };
  
  function rolling(eID){
      //console.log("rolling: " + eID);
      intID = setInterval(rotateCube,100,eID);
      clicked = true;
  }
  function rollEnd(eID){
    clicked = false;
    //console.log("unclicked: " + eID + " num to index is: " + parseInt(eID.substring(eID.length - 1)));
    clearInterval(intID);
    rollDie(eID, parseInt(eID.substring(eID.length - 1)));
  }
  function mouseLeft(eID){
    if(clicked) {
    //console.log("mouse left: " + eID);
    clearInterval(intID);
    rollEnd(eID);
    }
    clicked = false;
  
  }
  
  //rotates cubes by adding and removing classes that contain the animation and xyz rotation of the cube faces
  function rotateCube(eID){
    var cube = document.getElementById(eID);
    //console.log(cube.classList);
    var showClass = 'show-' + getNextNumber();
    var cubeClass = 'cube';
    if ( currentCubeClass ) {
      cube.classList.remove( currentCubeClass );
    }
    cube.classList.add(cubeClass);
    cube.classList.add(showClass);
    currentCubeClass = showClass;
  }
  function getNextNumber(){
    var nextNum = Math.floor(Math.random() * 6 + 1)
    return nextNum;
  }
  

  function rollDie(placeholderID, indx)
{
  var num = getNextNumber();
  numArray[indx] = num;
  var cube = document.getElementById(placeholderID);
  var showClass = 'show-' + num;
  var cubeClass = 'cube';
  if ( currentCubeClass ) {
    cube.classList.remove( currentCubeClass );
  }
  cube.classList.add(cubeClass);
  cube.classList.add(showClass);
  currentCubeClass = showClass;

}