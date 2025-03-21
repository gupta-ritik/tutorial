// loadinf the env variables
require("dotenv").config();
const express = require("express");
const workoutrouter = require("./routes/workouts");
const mongoose = require("mongoose");

// exprees app create a new express app
const app = express();
//PORT environment
const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(port, (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//router routes
// app.get("/", (req, res) => {
//     res.json({mssg:"Hello, World!"});
// });

app.use("/api/workouts", workoutrouter);

// connecting to the database
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to the database");
    // listen on http://localhost
    app.listen(port, () => {
      console.log(
        `Connected to db and  Server is running on http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.log(err));

// // listen on http://localhost

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
