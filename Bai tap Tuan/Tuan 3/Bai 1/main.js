<<<<<<< HEAD
var hours = 0;
var minutes = 0;
var seconds = 0;
var t;

function add() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}
	
	document.getElementById("timer").innerHTML = 
		(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
		(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
		(seconds > 9 ? seconds : "0" + seconds);
	
	timer();
}

function timer() {
	t = setTimeout(add, 1000);
}

function start() {
	timer();
}

function stop() {
	clearTimeout(t);
}

function reset() {
	clearTimeout(t);
	hours = 0;
	minutes = 0;
	seconds = 0;
	document.getElementById("timer").innerHTML = "00:00:00";
=======
var hours = 0;
var minutes = 0;
var seconds = 0;
var t;

function add() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}
	
	document.getElementById("timer").innerHTML = 
		(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
		(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
		(seconds > 9 ? seconds : "0" + seconds);
	
	timer();
}

function timer() {
	t = setTimeout(add, 1000);
}

function start() {
	timer();
}

function stop() {
	clearTimeout(t);
}

function reset() {
	clearTimeout(t);
	hours = 0;
	minutes = 0;
	seconds = 0;
	document.getElementById("timer").innerHTML = "00:00:00";
>>>>>>> 91337aa95a0b3d0f6231828418a979f7b7a0101c
}