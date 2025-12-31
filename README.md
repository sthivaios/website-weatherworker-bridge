# WeatherWorker Bridge
See https://github.com/sthivaios/website-weatherworker for more details.

This app runs on Docker and bridges MQTT to the WeatherWorker API.

It receives sensor readings from the EDLAVP weather station (see https://github.com/sthivaios/EDLAVP-ESP-FW)
then posts them to the WeatherWorker API to store to the KV.

The website can then access those values through the WeatherWorker API again with a GET request.

Note that this code is lowkey absolute crap and has a lot of bugs, I'm mostly just trying to get it working for now and its literally 7am as I'm typing this, I've been awake all night.