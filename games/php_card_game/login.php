<?php
session_start();
//connection setting for db:
$servername = "54.243.18.114";
$db_username = "ec2-user";
$db_password = "JakeDan4";
$dbname = "users";

//sanitize the user entered data:
$user_username = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
$user_password = filter_var($_POST["user_password"], FILTER_SANITIZE_STRING);
$user_lastname = filter_var($_POST["lastname"], FILTER_SANITIZE_STRING);
$user_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    // echo "<h1>Strings sanitized</h1>";
    
//Connect and check if we have a match for username (firstname)
    try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("SELECT * FROM players WHERE firstname='$user_username'");
        $stmt->execute();
        $count = $stmt->rowCount();
        // echo "<h1>Matched $count rows</h1>";
        
        //if we have a match, count will be 1, at this point we need to check if the password is correct
        if($count>=1) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $pass = $result['user_password'];
            // echo "<h1>run password check on $pass and $user_password and then display current high score of user</h1>";
            
            //we get the result of teh statment as an array and check the user password against the password the user just entered in
            if($pass==$user_password) {
                // If the passwords match we Set session variables and redirect to game.php
                $_SESSION["username"] = $result['firstname'];
                $_SESSION["score"] = $result['score'];
                
                

                // echo "Session variables username and score are set, user now considered logged in redirecting.";
                if(isset($_SESSION['username'])) {
                    if (isset($_SESSION['validLogin'])) {
                    unset($_SESSION["validlogin"]);
                    }

                    header("Location: game.php");
                    exit;
                }
            }
            else {
                // echo "error loggin in password mismatch";
                //if the passwords do not match, we set a session variable called validLogin and redirect back to index.php
                {
                    $_SESSION["validlogin"] = 'invalid';
                    header("Location: index.php");
                    exit;
                }
            }
        }
        //if the username does not yet exist, we'll just create a new account:
        else if($count<1) {
            
            //echo "<h1>Creating new account with $user_username $user_password $user_lastname $user_email</h1>";
    
            $stmt = $conn->prepare("INSERT INTO players (firstname, lastname, email, user_password, score)
            VALUES (:firstname, :lastname, :email, :user_password, :score)");
            $stmt->bindParam(':firstname', $firstname_val);
            $stmt->bindParam(':lastname', $lastname_val);
            $stmt->bindParam(':email', $email_val);
            $stmt->bindParam(':user_password', $user_password_val);
            $stmt->bindParam(':score', $score_val);
      
            // insert a row
            $firstname_val = $user_username;
            $lastname_val = $user_lastname;
            $email_val = $user_email;
            $user_password_val = $user_password;
            $score_val=0;
            $stmt->execute();
            // $result = $stmt->fetch(PDO::FETCH_ASSOC);
            // $nm = $result['firstname'];

            // echo "New records created successfully for $user_username setting session variables";
            // Set session variables
            $_SESSION["username"] = $user_username;
            $_SESSION["score"] = 0;
            // echo "Session variables username and score are set, NEW user now considered logged in redirecting.";
            if(isset($_SESSION['username'])) {
                if (isset($_SESSION['validLogin'])) {
                    unset($_SESSION["validlogin"]);
                    }
                header("Location: game.php");
                exit;
            }
        }    
        
        } catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
            }
            $conn = null;
    
?>