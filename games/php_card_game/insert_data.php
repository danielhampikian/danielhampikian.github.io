<?php
$servername = "54.243.18.114";
$username = "ec2-user";
$password = "JakeDan4";
$dbname = "users";


try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare sql and bind parameters
  $stmt = $conn->prepare("INSERT INTO players (firstname, lastname, email, user_password, score)
  VALUES (:firstname, :lastname, :email, :user_password, :score)");
  $stmt->bindParam(':firstname', $firstname);
  $stmt->bindParam(':lastname', $lastname);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':user_password', $user_password);
  $stmt->bindParam(':score', $score);

  // insert a row
  $firstname = "Dr";
  $lastname = "Dan";
  $email = "drdan@example.com";
  $user_password = "password1";
  $score=10;
  $stmt->execute();

  // insert another row
  $firstname = "Mary";
  $lastname = "Moe";
  $email = "mary@example.com";
  $user_password = "password2";
  $score=100;
  $stmt->execute();

  // insert another row
  $firstname = "Julie";
  $lastname = "Dooley";
  $email = "julie@example.com";
  $user_password = "password3";
  $score =1000;
  $stmt->execute();

  echo "New records created successfully";
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
?>