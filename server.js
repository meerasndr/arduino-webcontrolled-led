const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const { Board, Led } = require("johnny-five");
const board = new Board();

let blink, stopblink;

app.get('/blink', (req, res) => {
    
      res.send("Hellow world!")
      blink()
})
app.get('/stopblink', (req, res) => {
    res.send("Bye!!")
    stopblink()

})

app.listen(3000, () => {
    console.log("Server has started and is listening on port 3000")
})


board.on("ready", () => {
    const led = new Led(13);
    console.log('Board ready')
    blink = () => {
        led.blink(1000);
    }

    stopblink = () => {
        led.stop()
        led.off()
    }

  });