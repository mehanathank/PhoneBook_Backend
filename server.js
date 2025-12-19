const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const contactRoutes = require("./backend/routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

mongoose.connect("mongodb://localhost:27017/contactsdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/contacts", contactRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});