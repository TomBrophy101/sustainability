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

document.getElementById("button").onclick = function () {
        location.href = "game.html";
    };