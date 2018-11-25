<?php

$fname = $lname = $phone = $email = $password = " ";

function clean($d)
{
    $d=trim($d);
    $d=stripcslashes($d);
    $d=htmlspecialchars($d);
    return $d;
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $fname = clean($_POST['firstName']);
    $lname = clean($_POST['lastName']);
    $phone = clean($_POST['contactNo']);
    $email = clean($_POST['email']);
    $password = md5(clean($_POST['password']));

    echo "<h1>Registration Successful</h1>";
    echo "<br>";

    echo "First Name: ". $fname."<br>";
    echo "Last Name: ". $lname. "<br>";
    echo "Email: ". $email. "<br>";
    echo "Contact No: ". $phone. "<br>";
    echo "Password: ". $password. "<br>";
}
?>