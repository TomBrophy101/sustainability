//function is to show the quiz
// This will show the question.
function showQuiz() {
	var questions = document.getElementById("quiz");
	if (questions.style.display === "none") {
		questions.style.display = "inline";
	} else {
		questions.style.display = "none";
	}
	//playGame();
	
}

//function playGame() {
	//document.getElementById("quiz").innerHTML = "An Octopus has 8 tentacles?";
//}

function showResults() {
	document.getElementById("results").innerHTML = "Score: ";
	
}
