//Create a list of words

var words= ['pain','adore','undying','disarray','derangment','loss'];

// Create an alphabet to draw from when guessing (English)
var alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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


document.onkeyup = function (e) {
    var key = e.key    
	//key press saved as a string
		for (var i=0; i<words.length; i++) {
			for (var j=0; j < words[i].length; j++) {
				var place = words[i].charAt(j);
				if (place === key) {
					console.log(place);
				};


			}
		
		}
};


