const mongoose = require("mongoose");
const connectdb = () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(
      "mongodb+srv://haythemboughanmii:123haythem@cluster0.g4yxaah.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected")
  }
};
module.exports= connectdb
