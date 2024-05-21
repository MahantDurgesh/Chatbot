<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$database = "bot";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// getting user message through ajax
$getMesg = mysqli_real_escape_string($conn, $_POST['text']);
$getbtn = mysqli_real_escape_string($conn, $_POST['cat_btn']);
//checking user  query to database query
$check_data = "SELECT * FROM $getbtn WHERE queries  LIKE '%$getMesg%'";
$run_query = mysqli_query($conn, $check_data) or die("Error");


//if user query matched to database query we'll show the reply otherwise it will go to else 
if (mysqli_num_rows($run_query) > 0){
  //fetchinng reply  from the database according to user reply
  $fetch_data = mysqli_fetch_assoc($run_query);
  //storing reply to the variable which will forward to ajax
  $replay = $fetch_data['replies'];
  echo $replay;
}
   else{
     echo "Sorry cant able to understand your answer";
   }
?>