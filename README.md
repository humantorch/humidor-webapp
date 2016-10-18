# Sparklegravy Humidor

The beginnings of a bundle of applications used to power a WiFi-equipped hygrometer (temperature & humidity sensor) for a cigar humidor.

All data is being faked so far (still waiting for the DHT22 to show up in the mail) but you can see how it works at <a href="http://humidor.sparklegravy.com">humidor.sparklegravy.com</a>.

The webapp is built using <a href="http://yeoman.io">Yeoman</a> so you'll need to install it (`npm install -g yo` and so an and so forth) and then clone this repo. `npm install && bower install` to set up all the modules and packages and dealybops required, then un `gulp serve` to kick off a local server. `gulp` to compile a deploy-ready build in /dist. You know, if you've read this far you probably have a pretty good idea of what you're doing so I'll shut up.

Eventual goals:
* Microcomputer-controlled temperature sensor
* LCD screen for quick easy viewing
* Connected to a local wifi network
* Post updates to a web application
* Website where current and historical data can be viewed
* Updates posted to a Twitter account
* Pebble app so current data can be read from a smartwatch


Tools being used:
* Raspberry Pi Zero
* DHT22 environment sensor
* Lots of coffee and/or alcohol
* All of this:

<img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13307419_10154087269475767_3451691010449847324_n.jpg?oh=2eb7ea50e0de755980e7f90c906a74e3&oe=57E5E53A" width="500" alt="all the things">