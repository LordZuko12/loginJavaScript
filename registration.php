<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registration</title>
    <link type="text/css"  rel="stylesheet" href="style/style.css">
    <script type="text/javascript" src="js/validateRegistration.js"></script>
</head>
<body class="back">
<form action="controller/view.php" method="post" name="Registration" onsubmit="return validateForm()">
    <div class="regContent" align="center">
        <div align="center" class="divStyleReg">
            <h1>Registration</h1>
            <label for="fname">First Name:</label>
            <input id="fname" type="text" name="firstName" placeholder="First Name" >
            <br>
            <span class = "spanError"></span><br>

            <label for="lname">Last Name:</label>
            <input id="lname" type="text" name="lastName" placeholder="Last Name" >
            <br>
            <span class = "spanError"></span><br>

            <label for="email">Email ID:</label>
            <input id="email" type="text" name="email"placeholder="Your Email" >
            <br>
            <span class = "spanError"></span><br>

            <label for="phone">Contact No:</label>
            <input id="phone" type="text" name="contactNo" placeholder="Contact Number" >
            <br>
            <span class = "spanError"></span><br>

            <label for="pass">Password:</label>
            <input id="pass" type="password" name="password" placeholder="Password" >
            <br>
            <span class = "spanError"></span><br>

            <label for="rPass">Confirm Password:</label>
            <input id="rPass" type="password" name="rPassword" placeholder="Confirm Password" onkeyup="test(this)">
            <span id ="passSpan" class = "spanError"></span><br>
        </div>
        <div align="center">
            <input type="submit" value="Confirm"  class="buttonReg">
            <input type="reset" value="Reset"  class="buttonReg">
        </div>
    </div>
</form>
</body>
</html>