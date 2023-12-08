//function is to sign into website
function signIn() {
	var email = /[^\s@]+@[^\s@]+\.[^\s@]+/;
	var pwd = document.getElementById("pwd").value;
	if ( email.test(input)) {
		return 1;
	} else {
		return -1;
	}
}

//this function will navigate me to a different website
document.getElementById("button");

function goToGame() {
	location.href = "game.html";
};