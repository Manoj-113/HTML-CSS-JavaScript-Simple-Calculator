
function getHistory() {
	return document.getElementById("history-value").innerText;
}

function printHistory(numb) {
	document.getElementById("history-value").innerText = numb;
}

function getOutput() {
	return document.getElementById("output-value").innerText;
}

function printOutput(numb) {
	if (numb == "") {
		document.getElementById("output-value").innerText = numb;
	} else {
		document.getElementById("output-value").innerText = getFormattedNumber(numb);
	}

}

function getFomattedNumber(numb) {
	var n = Number(numb);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(numb) {
	return Number(numb.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		
	});
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < operator.length; i++) {
	number[i].addEventListener('click', function () {
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}