const Item = require("../model/Item");


// Add a new item
app.post('/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.status(201).json(newItem);
});

// Get all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});
