const express = require("express");
const router = express.Router();
// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Hello, World!" });
});

// GET single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "Hello world to id section" });
});
// POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "Hello world to post section" });
});
// DELETE a new workout
router.delete("/", (req, res) => {
  res.json({ mssg: "Hello world to delete section" });
});

// PUT a new workout

router.put("/:id", (req, res) => {
  res.json({ mssg: "Hello world to put section" });
});

// PATCH a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Hello world to patch section" });
});

// Export the router
module.exports = router;
