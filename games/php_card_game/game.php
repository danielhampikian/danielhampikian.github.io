<?php
session_start();
?>
<!doctype html>
<html>
<head>
	<title>Game</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="https://kit.fontawesome.com/cd6864276f.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body>
<?php
  $current_page = "game";

  //print($current_page);
  if(!isset($_SESSION['username'])) {
	  header("Location: index.php");
	  exit;
  }
  else {
    require_once('nav.php');
    require('score.php');
  }


?>

  <div id="score">
      <div class="center">
        <h1 class="info" id=player-score>Player Info</h1>
        <h2 class="info"id="player-health"></h2>
        <h2 class="info"id="opponent-health"></h2>
    </div>
   </div>    
    
  <div id="play-area">
    <div id="opponent-cards"></div>
    <div id="player-cards"></div>
    <button id="attack-defend" onclick="startTurn()">Attack</button>
  </div>
    
  <!-- modal -->
  <div id="game-modal" class="modal">

    <!-- content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h2 id="modal-head"></h2>
      </div>
      <div class="modal-body">
        <p id="modal-title"></p>
        <p id=modal-info></p>
        <div id="card-upgrade" class="card-focus">
            <div id=current-card></div>
            <button id="upgrade-attack" onclick="upgradeHealth()">+5/-5 Health</button>
            <button id="upgrade-health" onclick="upgradeAttack()">+5/-5 Attack</button>
            <button id="revive" onclick="revive()">Revive</button>
        </div>
      </div>
      <div class="modal-footer">
        <h2 id="modal-foot"></h2>
        <div id="game-over" class="game-over-focus">
          <form action='update_score.php' method='post' id='frmNewGame'onSubmit="return setScoreCookie();">
            <input id='new-game' type='submit' name='newgame' value='New Game' class='btnLogin' style='width:140px; margin:20px;'>
          </form>
        </div>
      </div>
    </div>
  
  </div>
	<?php
  	require('footer.php');
	?>
<script src="game.js"></script>
</body>
</html>