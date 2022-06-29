<?php
$servername = "54.243.18.114";
$username = "ec2-user";
$password = "JakeDan4";
$dbname = "game";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password,$score);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "UPDATE MyGuests SET score=100000 WHERE lastname='Dan'";

  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

  // echo a message to say the UPDATE succeeded
  echo $stmt->rowCount() . " records UPDATED successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>