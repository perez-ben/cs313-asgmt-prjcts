<?php

$name = $_POST['name'];
$email = $_POST['email'];
$major = $_POST['input_major'];

echo 'Name: ' . $name . "\n";
echo 'Email: ' . $email . "\n";
echo 'Major: ' . $major . "\n";

if( ! empty( $_POST['input_continent'] ) ) {
    // Loop to store and display values of individual checked checkbox.
    foreach ( $_POST['input_continent'] as $selected ) {
        echo 'Continents: ' . $selected."</br>";
    }
}



?>

<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>W03 Team Activity</title>
</head>

<body>
    <form action="" method="POST">

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
        
        <label for="checkbox_list">What continents have you been to?</label>
        <div id="checkbox_list"></div>
            <input type="checkbox" value="na" name="input_continent[]">North America <br>
            <input type="checkbox" value="sa" name="input_continent[]">South America <br>
            <input type="checkbox" value="eur" name="input_continent[]">Europe <br>
            <input type="checkbox" value="asia" name="input_continent[]">Asia <br>
            <input type="checkbox" value="aus" name="input_continent[]">Australia <br>
            <input type="checkbox" value="afr" name="input_continent[]">Africa <br>
            <input type="checkbox" value="ant" name="input_continent[]">Antarctica <br>
        </div>

        <button type="submit">Submit</button>
    </form>
</body>

</html>