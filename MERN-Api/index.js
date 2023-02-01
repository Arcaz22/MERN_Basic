const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");  
const app = express();

const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

app.use(bodyParser.json());//type JSON

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.errorMessage;
    const data = error.data;
    res.status(status).json
    ({ 
      message: message, 
      data : data
    });
});

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://chandra:BcU35wm4PgM19YCd@cluster0.0p4ilay.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    app.listen(4000, () => console.log('App listening on port 4000'));
  })
  .catch(err => {
    console.error(`Error connecting to MongoDB Atlas: ${err}`);
  });