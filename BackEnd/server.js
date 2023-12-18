const express = require("express");
const app = express();
const port = 4000; // localhost:4000
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to handle CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://g00332281:project@roryscluster.e1ab09q.mongodb.net/database?retryWrites=true&w=majority"
  );
}

// Define the schema for the fighter model
const fighterSchema = new mongoose.Schema({
  name: String,
  age: String,
  picture: String,
});

// Create a fighter model based on the schema
const fighterModel = mongoose.model("fighter", fighterSchema);

// Define routes

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get a specific fighter by ID
app.get("/api/fighter/:id", async (req, res) => {
  console.log(req.params.id);

  let fighter = await fighterModel.findById(req.params.id);
  res.send(fighter);
});

// Get all fighters
app.get("/api/fighters", async (req, res) => {
  let fighters = await fighterModel.find({});
  res.json(fighters);
});

// Update a fighter by ID
app.put("/api/fighter/:id", async (req, res) => {
  console.log("Change: " + req.params.id);

  let fighter = await fighterModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(fighter);
});

// Add a new fighter
app.post("/api/fighter", (req, res) => {
  console.log(req.body);

  fighterModel
    .create({
      name: req.body.name,
      age: req.body.age,
      picture: req.body.picture,
    })
    .then(() => {
      res.send("Fighter Has Been Added");
    })
    .catch(() => {
      res.send("Fighter Has NOT Been Added");
    });
});

// Delete a fighter by ID
app.delete("/api/fighter/:id", async (req, res) => {
  console.log("Remove: " + req.params.id);

  let fighter = await fighterModel.findByIdAndDelete(req.params.id);
  res.send(fighter);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
