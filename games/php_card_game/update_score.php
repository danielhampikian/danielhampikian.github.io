<?php
session_start();
//db values may want to just make these global:
$servername = "54.243.18.114";
$db_username = "ec2-user";
$db_password = "JakeDan4";
$dbname = "users";

$old_score = $_SESSION["score"];
$user_username = $_SESSION["username"];
// $height = $_COOKIE["height"];
//may want to filter var this and make sure it's a score but we're preparing the doc with a pdo so it should be ok:
$current_score = $_COOKIE["score"];

//it is helpful to not have a redirect at first and just echo values on this page that get sent or returned from mysql:

// echo "<h1>current score passed: $current_score old score checked: $old_score</h1>";
if($current_score > $old_score) {
    // echo"<h1>updating</h1>";
    //update score only if current score is better than the one they got when they logged in from database:
    $user_new_score = $current_score;

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "UPDATE players SET score=$user_new_score WHERE firstname='$user_username'";
    // echo $sql;
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    //redirect:
    if(isset($_SESSION['username'])) {
        $_SESSION["score"]=$user_new_score;
            header("Location: game.php");
            exit;
        }

}
catch(PDOException $e) {
    // echo "Error: " . $e->getMessage();

    //comment out redirect to debug mysql:
    if(isset($_SESSION['username'])) {
        $_SESSION["score"]=$user_new_score;
            header("Location: game.php");
            exit;
        }
}
}
else {
    // echo "<h1>no database check done!</h1>";
    if(isset($_SESSION['username'])) {
            header("Location: game.php");
            exit;
        }
}

?>