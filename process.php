<?php
// Establishing connection with server by passing "server_name", "user_id", "password".
$connection = mysql_connect("localhost", "root", "");
// Selecting Database by passing "database_name" and above connection variable.
$db = mysql_select_db("patient", $connection);
$first_name=$_POST['P_fname']; // Fetching Values from URL
$last_name=$_POST['P_lname'];
$age=$_POST['P_age'];
$dob=$_POST['P_dob'];
$gender=$_POST['P_gender'];
$phone=$_POST['P_phone'];
$info=$_POST['P_info'];
$query = mysql_query("insert into patient_info(Pfirst_name,Plast_name,age,dob,gender,phone,info) values ('$first_name','$last_name','$age','$dob','$gender','$phone','$info')"); //Insert query

if($query){
echo "Data Submitted succesfully";
}
mysql_close($connection); // Connection Closed.
?>