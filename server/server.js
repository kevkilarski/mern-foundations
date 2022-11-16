const express = require("express"); // Requiring express to be used
const app = express();
const cors = require("cors"); // Requiring cors to be used
require("dotenv").config({ path: "./config.env" }); // Requiring config.env file
const port = process.env.PORT || 5000; // Will access the port variable from the config.env, that we are required
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});