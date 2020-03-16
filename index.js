const express = require("express");

const keys = require("./config/keys");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err))
  .then(res => console.log("#### mongoDB is connected ####"));

const app = express();

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(
  `==============================
  Server is running at ${PORT}
==============================`
);
