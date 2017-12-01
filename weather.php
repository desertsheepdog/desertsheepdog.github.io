<?php
$WeatherSource = "https://api.forecast.io/forecast/d11ddb16f6b9c38a8ae1e08b0d9dfa82/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>