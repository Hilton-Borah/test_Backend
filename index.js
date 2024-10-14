const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./model/Item");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongodb+srv://hiltonborah123:vccpSzsX2uYwQD9Q@testingcluster.hroxo.mongodb.net/?retryWrites=true&w=majority&appName=TestingCluster
mongoose
  .connect(
    "mongodb+srv://hiltonborah123:vccpSzsX2uYwQD9Q@testingcluster.hroxo.mongodb.net/testdeployment?retryWrites=true&w=majority&appName=TestingCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/items", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.status(201).json(newItem);
});

// Get all items
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
