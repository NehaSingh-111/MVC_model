const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: String,
  salary: Number,
});

const empModel = mongoose.model("emp", empSchema);

module.exports = empModel;
