function isValidName(fname){
    if(/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/.test(fname)){
        return true;
    }
    else{
        return false;
    }
}

function isValidMobile(phone){
        if(/^(0088|\+88)?(01)[156789]{1}[0-9]{8}$/.test(phone)){
            return true;
        }
        else {
            return false;
        }
    }
	
function isValidEmail(email) {
    if (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/.test(email)) {
        return true;
    }
    else {
        return false;
    }

}

function isValidPass(pass){
	if(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass))
    {
        return true;
    }else{
	    return false;
    }
}

function clearError()
{

    var clearError = document.querySelectorAll(".spanError");

    clearError.forEach(function (element) {
        element.classList.remove("spanError");
        element.innerHTML = "";
    });

}

function clearValid() {

    var validClass = document.querySelectorAll(".valid");

    validClass.forEach(function (element) {
        element.classList.remove("valid");
    });
}
function test(dom){

    var pass = document.getElementById("pass");
    var passCheck = document.getElementById("passSpan");
    var rePass = document.getElementById("rPass");

    if(pass.value === dom.value)
    {
        passCheck.style.color = "green";
        passCheck.innerText = " ✔ ";
        rePass.style.borderColor = "green";
    }else
    {

        passCheck.style.color = "red";
        rePass.style.borderColor = "red";
        passCheck.innerText = " ✖ ";
    }

}

function validateForm() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("pass");
    var rePassword = document.getElementById("rPass");

    var valid = true;
    var validFname = true;
    var validLname = true;
    var validEmail = true;
    var validPhone = true;
    var validPass = true;
    var validRpass = true;

    //First Name
    if(fname.value.length===0)
    {
        fname.style.borderColor = "red";
        fname.nextElementSibling.nextElementSibling.innerHTML ="Field can not be empty";
        validFname = false;
    }else
    {
      if(!isValidName(fname.value.toString()))
      {
            fname.style.borderColor = "red";
            fname.nextElementSibling.nextElementSibling.innerHTML ="Must contain only alphabets";
            validFname = false;
      }else{

          fname.style.borderColor ="green";
          fname.nextElementSibling.nextElementSibling.innerHTML = " ";
          validFname = true;
      }

    }

    //Last Name
    if(lname.value.length===0)
    {
        lname.style.borderColor = "red";
        lname.nextElementSibling.nextElementSibling.innerHTML ="Field can not be empty";
        validLname =false;
    }else
    {
      if(!isValidName(lname.value.toString()))
      {
            lname.style.borderColor = "red";
            lname.nextElementSibling.nextElementSibling.innerHTML ="Must contain only alphabets";
            validLname = false;
      }else{

          lname.style.borderColor = "green";
          lname.nextElementSibling.nextElementSibling.innerHTML = " ";
          validLname = true;

      }

    }

    //Email
    if(email.value.length===0)
    {
        email.style.borderColor = "red";
        email.nextElementSibling.nextElementSibling.innerHTML ="Field can not be empty";;
        validEmail =false;
    }else
    {
      if(!isValidEmail(email.value.toString()))
      {
            email.style.borderColor = "red";
            email.nextElementSibling.nextElementSibling.innerHTML ="Invalid email address";
            validEmail = false;
      }else
      {
         email.style.borderColor = "green";
         email.nextElementSibling.nextElementSibling.innerHTML = " ";
         validEmail = true;
      }

    }

    //Phone
    if(phone.value.length===0)
    {
        phone.style.borderColor = "red";
        phone.nextElementSibling.nextElementSibling.innerHTML ="Field can not be empty";
        validPhone =false;
    }else
    {
      if(!isValidMobile(phone.value.toString()))
      {
            phone.style.borderColor = "red";
            phone.nextElementSibling.nextElementSibling.innerHTML ="Minimum 11 digits required starting with 01";
            validPhone = false;
      }else{

          phone.style.borderColor = "green";
          phone.nextElementSibling.nextElementSibling.innerHTML = " ";
          validPhone = true;
      }

    }

    //Password
    if(password.value.length===0)
    {
        password.style.borderColor = "red";
        password.nextElementSibling.nextElementSibling.innerHTML ="Field can not be empty";
        validPass =false;
    }else
	{
		if(!isValidPass(password.value.toString()))
		{
            password.style.borderColor = "red";
            password.nextElementSibling.nextElementSibling.innerHTML = "Must start with a capital letter and contain special character";
            validPass = false;
        }else{

		    password.style.borderColor = "green";
		    password.nextElementSibling.nextElementSibling.innerHTML = " ";
		    validPass = true;
        }
	}

	//Confirm Password
    if(rePassword.value!==password.value)
    {
        console.log(rePassword.value);
        rePassword.style.borderColor = "red";
        rePassword.nextElementSibling.nextElementSibling.innerHTML = " ✖ ";
        validRpass =false;
    }

    //Checks all validation
    if(!validFname || !validLname || !validEmail || !validPhone || !validPass || !validRpass)
    {
        valid = false;
    }else
    {
        valid = true;
    }

    return valid;
}

