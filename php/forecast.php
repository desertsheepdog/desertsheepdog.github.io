<?php
$ForecastSource = "http://api.wunderground.com/api/4a14b4e3dca2bcbd/geolookup/conditions/forecast/astronomy/q/" . $_GET["lat"] . "," . $_GET["lon"] . ".json";
header("Content-Type: application/html");
header("Cache-Control: no-cache");
readfile($ForecastSource);
?>