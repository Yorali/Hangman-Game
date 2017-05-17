window.onload = function() {

//Create a list of words

var words= [['p','a','i','n'],['a','d','o','r','e'],['u','n','d','y','i','n','g'],['d','i','s','a','r','r','a','y'],['d','e','r','a','n','g','m','e','n','t'],['l','o','s','s']];

// Create an alphabet to draw from when guessing (English)
var alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Chooses a word
var choose = Math.floor(Math.random()*(words.length-1));

var decision = words[choose];

console.log(decision);

//Creates new empty array corresponding to the word chosen
var empty = new Array(decision.length);



//Counter to death, 7 tries
var loss = 7;



//Display assignment on html page
// function blank() {
// 	for (var i = 0; i < empty.length; i++) {
// 		var crtword = document.getElementById("crtword");
// 		var insert = document.createTextNode(empty[i]);
// 		crtword.appendChild(insert);
// 	}
// }
//Assign _ for each letter of chosen word
for (var i = 0; i < empty.length; i++) {
	empty[i] = "_ ";
}

	for (var i = 0; i < empty.length; i++) {
		var crtword = document.getElementById('crtword');
		var insert = document.createTextNode(empty[i]);
		crtword.appendChild(insert);
	}

		// var correctwrd = document.getElementById('correctwrd');
		// var insertCor = document.createTextNode(empty[i]);
		// correctwrd.appendChild(insert);



//Check if user guess exists in current word
document.onkeyup = function (e) {
    var key = e.key; 
	for (var i = 0; i < decision.length; i++) {
		if (decision[i] === key) {
 			empty[i] = (key + " ");
 			var find = true;
 			
 			var correctwrd = document.getElementById('correctwrd');
			var insertCor = document.createTextNode(decision[i]);
			correctwrd.appendChild(insertCor);
			
		}
	}

	if(!find) {
		var lettersGuess = document.getElementById('guessDiv');
		var place = document.createTextNode(" " + key);
		console.log(lettersGuess);
		//lettersGuess.innerHTML = lettersGuess.innerHTML + " " + key;
		lettersGuess.appendChild(place); //here
		loss--;

	}
	// Letters found entirely??
	var complete = true;
	// Iterate through to find 
	for (var i = 0; i < empty.length; i++) {
		if (empty[i] === "_ ") {
			complete = false;
		}
	}
	if (complete) {
		window.alert("死亡避けたんだな / You have avoided death");
	}

	if (loss === 0) {
		window.alert("死亡した。今から葬式だよ。 / You have died")
	}

}


	
// guess function(key) {
// 	var key= //key press saved as a string
// 	for (var i=0; i<words.length; i++) {
// 		for (var j=0; j<words[i].length; j++) {
// 			var place=words[i].charAt(j);
// 			console.log(place);
// 		}
// 	}
// }

	//     function guess(input) {
	// //	var key= 9; //key press saved as a string
	// 		for (var i=0; i<words.length; i++) {
	// 			for (var j=0; j < words[i].length; j++) {
	// 				var place = words[i].charAt(j);
	// 				if (place === input) {
	// 					console.log(place);
	// 				};


	// 			}
	// 	}


// document.onkeyup = function (e) {
//     var key = e.key    
// 	//key press saved as a string
// 		for (var i=0; i<words.length; i++) {
// 			for (var j=0; j < words[i].length; j++) {
// 				var place = words[i].charAt(j);
// 				if (place === key) {
// 					console.log(place);
// 				};


// 			}
		
// 		}
// };


// targetDiv.innerHTML = "Add text here to the HTML file"

}
