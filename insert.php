<?php
    if($_POST['score1']){
        include("secure/database.php");  
        $link=mysqli_connect(HOST,USERNAME,PASSWORD,DBNAME) or die("Connect Error ".mysqli_error($link));
            $score1 = $_POST['score1'];
        $sql="INSERT INTO globalHighScore (hiscore) VALUES ($score1)";
        $result=mysqli_query($link,$sql) or die ("Error:" .mysqli_error($link));
        mysqli_free_result($result);
        mysqli_close($link);
    }
?>