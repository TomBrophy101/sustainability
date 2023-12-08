//function is to show the quiz
// This will show the question.
function showQuiz() {
	var questions = document.getElementById("quiz");
	if (questions.style.display === "none") {
		questions.style.display = "inline";
	} else {
		questions.style.display = "none";
	}
	
}

//This will show the results.
function showResults() {
	document.getElementById("results").innerHTML = "Score: ";
	
}
