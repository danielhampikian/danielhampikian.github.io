<?php
// Start the session
session_start();
?>
<!doctype html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<style>
	  .form-head {
    color: #191919;
    font-weight: normal;
    font-weight: 400;
    margin: 0;
    text-align: center;
    font-size: 1.8em;
}

.error-message {
    padding: 7px 10px;
    background: #fff1f2;
    border: #ffd5da 1px solid;
    color: #d6001c;
    border-radius: 4px;
    margin: 30px 10px 10px 10px;
}

.demo-table {
    background: #ffffff;
    border-spacing: initial;
    margin: 15px auto;
    word-break: break-word;
    table-layout: auto;
    line-height: 1.8em;
    color: #333;
    border-radius: 4px;
    padding: 30px;
    width: 380px;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
}

.demo-table .label {
    color: #888888;
}

.demo-table .field-column {
    padding: 15px 10px;
}

.demo-input-box {
    padding: 13px;
    border: #CCC 1px solid;
    border-radius: 4px;
    width: 100%;
}

.btnLogin {
    padding: 13px;
    background-color: #5d9cec;
    color: #f5f7fa;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    border: #5791da 1px solid;
    font-size: 1.1em;
}

.response-text {
    max-width: 380px;
    font-size: 1.5em;
    text-align: center;
    background: #fff3de;
    padding: 42px;
    border-radius: 3px;
    border: #f5e9d4 1px solid;
    font-family: arial;
    line-height: 34px;
    margin: 15px auto;
}

.terms {
  margin-bottom: 5px;
}

.dashboard {
  background: #d2edd5;
  text-align: center;
  margin: 15px auto;
  line-height: 1.8em;
  color: #333;
  border-radius: 4px;
  padding: 30px;
  max-width: 400px;
  border: #c8e0cb 1px solid;
}
.error-info {
  color: #FF0000;
  margin-left: 10px;
}
a.logout-button {
  color: #09f;
}
</style>
<title>Home</title>
</head>

<body>

<?php

  $current_page = "home";
  require('nav.php');
  //print($current_page);

?>

	<form action="login.php" method="post" id="frmLogin" onSubmit="return validate();">
        <div class="demo-table">

                <div class="form-head">Login</div>
                <div class="field-column">
                    <div>
						<!-- firstname -->
                        <label for="username">Username</label><span id="user_info" class="error-info"></span>
                    </div>
                    <div>
                        <input name="user_name" id="user_name" type="text"
                            class="demo-input-box">
                    </div>
                </div>
                <div class="field-column">
                    <div>
                        <label for="password">Password</label><span id="password_info" class="error-info"></span>
                    </div>
                    <div>
                        <input name="user_password" id="user_password" type="password"
                            class="demo-input-box">
                    </div>
				</div>
				<div class="field-column">
                    <div>
                        <label for="lastname">Last Name</label><span id="lastname_info" class="error-info"></span>
                    </div>
                    <div>
                        <input name="lastname" id="lastname" type="text"
                            class="demo-input-box">
                    </div>
				</div>
				<div class="field-column">
                    <div>
                        <label for="email">Email</label><span id="email_info" class="error-info"></span>
                    </div>
                    <div>
                        <input name="email" id="email" type="email"
                            class="demo-input-box">
                    </div>
                </div>
                <div class=field-column>
                    <div>
                        <input type="submit" name="login" value="Login"
                        class="btnLogin"></span>
                    </div>
				</div>
				<div class=field-column>
                    <div>
                        <input type="submit" name="newuser" value="Create Account"
                        class="btnLogin"></span>
                    </div>
                </div>
            </div>
		</form>
		<script src="validate.js"></script>

	<?php
	  require('footer.php');
	  if(isset($_SESSION['validlogin'])) { 
		  $pass = $_SESSION['validlogin'];
			echo "<h1>password error: $pass</h1>";
			?>
		<script src='password.js'></script>
		<?php
	  }
	?>
</body>
</html>