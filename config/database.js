const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/contactsdb", {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    console.log("Make sure your IP is whitelisted in MongoDB Atlas");
    console.log("Visit: https://cloud.mongodb.com/v2/projects/YOUR_PROJECT_ID/security/network/accessList");
    process.exit(1);
  }
};

module.exports = connectDB;