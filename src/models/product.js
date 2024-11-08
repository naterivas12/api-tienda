const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);