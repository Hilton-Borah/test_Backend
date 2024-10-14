const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
