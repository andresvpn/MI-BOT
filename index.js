var express = require('express');
var cors = require('cors');
var secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080
const app = express();
const start_bot1 = require("./bot1.js")
const start_bot2 = require("./bot2.js")
try {
  app.use(express.json());

  app.enable('trust proxy');
  app.set("json spaces", 2)
  app.use(cors())
  //app.use(secure)
  app.use(express.static("public"))
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bio.html");
  })


  start_bot1()
  start_bot2()
} catch (e) {
  console.log(e)
}

app.listen(PORT, () => {
 
  console.log(`SERVIDOR FUNCIONANDO EN PUERTO:` + PORT)
})
