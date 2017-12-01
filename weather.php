<?php
$WeatherSource = "api.openweathermap.org/data/2.5/weather" . $_GET["lat="] . "&" . $_GET["lon="] . "&mode=xml&APPID=760ce3d4a8ca81faf2c3dfb1fee3c583";
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>