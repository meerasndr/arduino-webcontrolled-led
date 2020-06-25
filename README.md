### Arduino Web Controlled LED
This is a simple project with a HTML controlling the LED on an Arduino Uno board.

#### Hardware used:
- Arduino Uno
- Standard LED
- Laptop with Ubuntu OS

#### Software / packages used:
- NodeJS
- Johnny-Five
- ExpressJS
- Cors (just to avoid seeing the annoying console warning)

#### How to run this project:
- Clone the repo to your local
- Fire up Terminal / command prompt and open the folder with the cloned repo
- Run `npm install` so that these packages get added to your local project: Johnny-Five, Express, Cors. In order to do this, make sure you already have Node and npm in your machine.
- Once all packages are installed without any error, connect the Arduino to your machine, and make sure the LED is connected on Port 13, [like so](http://johnny-five.io/#hello-world)
- Back in the Terminal. Run `node server.js`. This should setup a localhost on port 3000, which is ready to listen to incoming requests.
- Open up the pressbtn.html file in your favourite browser. If everything is set up correctly, clicking on the Blink LED and Stop LED buttons should control the on-board LED.
