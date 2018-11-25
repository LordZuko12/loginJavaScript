<?php ?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link type="text/css" rel="stylesheet" href="style/style.css">
</head>
<body class="back">
<form action="controller/loginValid.php" method="post" name="Login">
    <div class="logContent">
        <div align="center"><img src="resources/logPic.png" height="120px" width="120px"> </div>
        <div id="" class="divStyleLog" align="center">
            <label for="uname">User Name:</label>
            <input class="" id="uname" type="text" name="userName">
            <br>
            <label for="pass">Password:</label>
            <input id="pass" type="password" name="password" onclick="sub">
        </div>
        <script src="JS/login.js"></script>

        <div align="center">
            <button name="submit" type="submit" value="submit" class="buttonLog">Login</button>
            <a href="registration.php"><button name="signUp" type="button" class="buttonLog">Sign Up</button></a>
        </div>
    </div>
</form>
</body>
</html>