var maxZ = 1000;
var shapeMaxD = 40;
var shapeMinD = 40;
var canvasW = 740;
var canvasH = 340;

var getCanvas;
var timer;
var timerArray = [];
var xy = {x: -1, y:-1};

//TODO: color picker pallette for shapes
//TODO: limited delta for gradient between color of shapes
//TODO: Triangles pointing every direction
//TODO: AR!!!
var xVar = "H";
var yVar = 5;
function reassignVariables(xV, yV){
	var place = xV;
	xV = yV;
	yV = place;
	console.log("X var = " + xV, "Y var = " + yV);
}
window.onload = function() {
	reassignVariables(xVar, yVar);
	var addS = document.getElementById("addS");
	addS.onclick = addSquare;
	var addC = document.getElementById("addC");
	addC.onclick = addCircle;
	var clear = document.getElementById("clear");
	clear.onclick = clearAll;
	var addT = document.getElementById("addT");
	addT.onclick = addTriangle;
	var start = document.getElementById("start");
	start.onclick = timedArtStart;
	var stop = document.getElementById("stop");
	stop.onclick = timedArtStop;
	var startAnim = document.getElementById("startAnim");
	startAnim.onclick = startAnimation;
	var stopAnim = document.getElementById("stopAnim");
	stopAnim.onclick = stopAnimation;
};
function timedArtStart() {
	timer = setInterval(function(){ generateRandom() }, 1000);
	timerArray.push(timer);
}

function timedArtStop() {
	timerArray.forEach(function(elem){
		clearInterval(elem);
	});
	timerArray = [];
}
function startAnimation() {
	timer = setInterval(function(){ moveRandom() }, 10);
	timerArray.push(timer);
}
function stopAnimation(){
		timerArray.forEach(function(elem){
		clearInterval(elem);
	});
	timerArray = [];
}
function moveRandom(){
	
	var artArea = document.getElementById("art");
	var shapes = artArea.getElementsByTagName("div");
	for (let i = shapes.length - 1; i >= 0; i--) {
		getRandomDir();
		//console.log("xy.x value is: " + xy.x + " xy.y value is: " + xy.y);
		var oldXPos = parseInt(shapes[i].style.left);
		var newXPos = oldXPos + parseInt(xy.x) * 3;
		var oldYPos = parseInt(shapes[i].style.top);
		var newYPos = oldYPos + parseInt(xy.y) * 3;
		newXPos += "px";
		newYPos += "px";
		shapes[i].style.top = newYPos;
		shapes[i].style.left = newXPos;
	}

}
function getRandomRotation(){
	var rot = parseInt(Math.random() * 360);
	var rotString = "rotate(";
	rotString += rot;
	rotString +="deg)";
	console.log("degree to rotate string: " + rotString);
	return rotString;
}
function getRandomDir(){
	var dir = parseInt(Math.random() * 2);
	var neg = parseInt(Math.random() * 2);
	var changeDir = parseInt(Math.random()*7);
	if (changeDir != 0) {
		return;
	}
		
	else {
		switch(dir) {
			case 0:
				if(neg == 0){
					xy.x = -1;
				}
				if(neg == 1){
					xy.x = 1;
				}
				break;
			case 1: 
				if(neg == 0){
					xy.y = -1;
				}
				if(neg == 1){
					xy.y = 1;
				}
					break;
				default:
				break;
		}
	}
}

function generateRandom() {
	var shape = (parseInt(Math.random()*3));
	switch(shape) {
		case 0:
			addSquare();
			break;
		case 1:
			addCircle();
			break;
		case 2:
			addTriangle();
			break;
		default:
		break;
	}
}

function randXPos(){
	return (parseInt(Math.random() * canvasW)) + "px";
}
function randYPos(){
	return (parseInt(Math.random() * canvasH)) + "px";
}
function randDim(){
	return (parseInt(Math.random() * shapeMaxD) + shapeMinD) + "px";
}

function clearAll() {
	var artArea = document.getElementById("art");
	var shapes = artArea.getElementsByTagName("div");
	for (let i = shapes.length - 1; i >= 0; i--) {
		shapes[i].parentNode.removeChild(shapes[i]);
	}
}

function addSquare() {
	var square = document.createElement("div");
	square.className = "square_custom";
	square.style.left = randXPos();
	square.style.top = randYPos();
	square.style.backgroundColor = getRandomColor();
	var randW = randDim();
	var randH = randDim();
	square.style.width = randW;
	square.style.height = randH;
	square.onclick = frontClick;
	var artArea = document.getElementById("art");
	artArea.appendChild(square);
}

function addCircle(){
	var circle = document.createElement("div");
	circle.className = "circle_custom";
	circle.style.left = randXPos();
	circle.style.top = randYPos();
	circle.style.backgroundColor = getRandomColor();
	var randW = randDim();
	var randH = randDim();
	circle.style.width = randW;
	circle.style.height = randH;
	circle.onclick = frontClick;
	var artArea = document.getElementById("art");
	artArea.appendChild(circle);
}

function addTriangle(){
	var triangle = document.createElement("div");
	triangle.className = "triangle_custom";
	triangle.style.left = randXPos();
	triangle.style.top = randYPos();
	var randC = getRandomColor();
	var randB = randDim();
	triangle.style.borderRight = randB + " solid transparent";
	triangle.style.borderLeft = randB + " solid transparent";
	triangle.style.borderBottom = randB + " solid " + randC;
	
	triangle.style.transform = getRandomRotation();
	triangle.onclick = frontClick;
	var artArea = document.getElementById("art");
	artArea.appendChild(triangle);
}


function frontClick(){
var oldZ = parseInt(this.style.zIndex);
	if (oldZ == maxZ) {
		this.parentNode.removeChild(this);
	}
	else {
		maxZ++;
		this.style.zIndex = maxZ;
	}
}

function getRandomColor() {
	var letters = "0123456789abcdef";
	var result = "#";
	for (var i = 0; i<6; i++) {
		result += letters.charAt(parseInt(Math.random() * letters.length));
	}
	return result;
}

$("#prevImg").on('click', function () {
	html2canvas(document.querySelector("#art")).then(canvas => {
		document.body.appendChild(canvas);
		getCanvas = canvas;
	});
});

$("#convImg").on('click', function () {
	var imageData = getCanvas.toDataURL("image/png");
	var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
	$("#convImg").attr("download", "image.png").attr("href", newData);
});

