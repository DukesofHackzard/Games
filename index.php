<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Dukes of Hackzard!</title>

    <!-- Bootstrap core CSS -->
    <link href="bs/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Plugin JavaScript -->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
            <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

    <!-- Custom fonts for this template -->
    <link rel="stylesheet" href="bs/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="bs/vendor/simple-line-icons/css/simple-line-icons.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="bs/device-mockups/device-mockups.min.css">

    <!-- Custom styles for this template -->
    <link href="bs/css/new-age.min.css" rel="stylesheet">
      
    <script type="text/javascript" src="phaser.min.js"></script>
    <script type="text/javascript" src="boot.js"></script>
    <script type="text/javascript" src="load.js"></script>
    <script type="text/javascript" src="menu.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript" src="over.js"></script>
    <script type="text/javascript" src="game.js"></script>
      
      <style>
          .gameDiv {
              border: 10px solid black;
              width: 420px;
              height: 510px; 
              border-radius: 10px 10px 0px 0px;
          }
          
          .base {
              border: 3px solid black;
              background: black;
              height: 60px;
              width: 420px;
              border-radius: 0px 0px 20px 20px;
          }
      </style>
      
      

  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <h6 class="navbar-brand js-scroll-trigger">Dukes of Hackzard</h6>
        </div>
    </nav>

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-3 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">Dukes of Hackzard!</h1>
              <h6 class="mb-5">A game brought to you by some good ol' boys.</h6>
            </div>
          </div>
          <div class="col-lg-4 my-auto">
            <div class="gameDiv" id="game">
            </div>
              <div class="base">
                    
              </div>
          </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-3">
                <div>
                    <br><br><br><br><br><br>
                    <h1 id="highScore">High Score:</h1>
                    <?php
                include("secure/database.php");  
                            $link=mysqli_connect(HOST,USERNAME,PASSWORD,DBNAME) or die("Connect Error ".mysqli_error($link));
                            $sql="SELECT * FROM globalHighScore ORDER BY hiscore DESC LIMIT 10";
                            $result=mysqli_query($link,$sql) or die ("Error:" .mysqli_error($link));
                            $count = 0;
                            //echo"<ol>";
                     // echo "<tr>";
                      while($finfo=mysqli_fetch_field($result)){
                        //echo $finfo->name;
                      }
                      //echo "</tr>";
                      while($row=mysqli_fetch_array($result, MYSQLI_ASSOC)){
                        echo "<ol>";
                        foreach($row as $value){
                          $count = $count +1;
                          echo$count.". ".$value;
                        }
                        echo "</ol>";
                      }
                      //echo "</ol>";
                      mysqli_free_result($result);
                    mysqli_close($link);
                ?>
                </div>
            </div>
        </div>
      </div>
    </header>

    

    <footer>
      <div class="container">
        <p>&copy; 2017 Dukes of Hackzard. All Rights Reserved.</p>
      
      </div>
    </footer>

  </body>

</html>
