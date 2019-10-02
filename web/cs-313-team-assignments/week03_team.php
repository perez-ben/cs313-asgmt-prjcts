<?php

$name = $_POST['name'];
$email = $_POST['email'];
$major = $_POST['input_major'];
$continent = $_POST['input_continent'];
 = $_POST['input_na']
 = $_POST['input_sa']
 = $_POST['input_eur']
 = $_POST['input_asia']
 = $_POST['input_aus']
 = $_POST['input_afr']
 = $_POST['input_ant']

echo 'Name: ' . $name . "\n";
echo 'Email: ' . $email . "\n";
echo 'Major: ' . $major . "\n";
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>W03 Team Activity</title>
</head>

<body>
    <form action="week03_team.php" method="POST">

        <label for="input_name">Name</label>
        <input id="input_name" type="text" name="name" placeholder="Name">

        <label for="input_email">Email</label>
        <input id="input_email" type="text" name="email" placeholder="Email">

        <label for="radio_major">Major</label>
        <div id="radio_major"></div>
            <input type="radio" name="input_major" value="cs"> Computer Science <br>
            <input type="radio" name="input_major" value="wdd"> Web Design and Development <br>
            <input type="radio" name="input_major" value="cit"> Computer Information Technology <br>
            <input type="radio" name="input_major" value="ce"> Computer Engineering
        </div>

        <textarea name="comments" placeholder="Comments" id="comments" cols="30" rows="10"></textarea>
        
        <label for="radio_major">Major</label>
        <div id="radio_major"></div>
            <input type="checkbox" value="" name="input_na">North America <br>
            <input type="checkbox" value="" name="input_sa">South America <br>
            <input type="checkbox" value="" name="input_eur">Europe <br>
            <input type="checkbox" value="" name="input_asia">Asia <br>
            <input type="checkbox" value="" name="input_aus">Australia <br>
            <input type="checkbox" value="" name="input_afr">Africa <br>
            <input type="checkbox" value="" name="input_ant">Antarctica <br>
        </div>
    </form>
</body>

</html>