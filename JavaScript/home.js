function signIn(input) {
	if (form.userid.value == "admin" && form.pwd.value == "noahgrocery"){
      form.action = "#";
      return true;
  }
  else if(form.userid.value == "admin2" && form.pwd.value == "noahgrocery2"){
      form.action = "#";
      return true;
  } else {
    alert("Incorrect Password or Username")
    return false;
  }
}