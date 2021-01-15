const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const conn = require('./database/db')

require('./routes/user.routes')(app)



app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });