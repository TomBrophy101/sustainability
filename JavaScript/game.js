//function is to show the quiz
// This will show the question.
function showQuiz() {
	var questions = document.getElementById("quiz");
	if (questions.style.display === "none") {
		questions.style.display = "block";
	} else {
		questions.style.display = "none";
	}
	
	document.getElementById("quiz").innerHTML = "An Octopus has 8 tentacles?";
	
}
