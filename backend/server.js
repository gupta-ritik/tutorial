// loadinf the env variables
require("dotenv").config();
const express = require("express");

// exprees app create a new express app
const app = express();

//router routes
app.get("/", (req, res) => {
    res.json({mssg:"Hello, World!"});
});

// listen on http://localhost
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// middleware 
app.use(port, (req, res, next) => {
    console.log(req.path, req.method)
    next()})