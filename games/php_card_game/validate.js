function validate() {
        var $valid = true;
        var user_info = document.getElementById("user_info");
        var password_info = document.getElementById("password_info");
        var email_info = document.getElementById("email_info");
        var lastname_info = document.getElementById("lastname_info");
        var userName = document.getElementById("user_name").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;
        var lastname = document.getElementById("lastname").value;
        if(userName == "") 
        {
            user_info.innerHTML = "required";
        	$valid = false;
        }
        if(password == "") 
        {
        	password_info.innerHTML = "required";
            $valid = false;
        }
        if(email == "") 
        {
            email_info.innerHTML = "required";
        	$valid = false;
        }
        if(lastname == "") 
        {
        	lastname_info.innerHTML = "required";
            $valid = false;
        }
        return $valid;
    }

