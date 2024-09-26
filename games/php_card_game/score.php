<?php
session_start();
$servername = "54.243.18.114";
$db_username = "ec2-user";
$db_password = "JakeDan4";
$dbname = "users";

echo "<table class='demo-table' style='border: solid 1px black;'><caption style='font-size: 30px;'>High Scores</caption>";
echo "<tr><th class='field-column' >Firstname</th><th class='field-column'>Lastname</th><th class='field-column'>Score</th></tr>";

class TableRows extends RecursiveIteratorIterator {
  function __construct($it) {
    parent::__construct($it, self::LEAVES_ONLY);
  }

  function current() {
    return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
  }

  function beginChildren() {
    echo "<tr>";
  }

  function endChildren() {
    echo "</tr>" . "\n";
  }
}

    try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $db_username, $db_password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        $stmt = $conn->prepare("SELECT firstname, lastname, score FROM players ORDER BY score DESC LIMIT 3");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
$conn = null;
echo "</table>";
?>