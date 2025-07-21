const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/api_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
};

module.exports = connectDB;
