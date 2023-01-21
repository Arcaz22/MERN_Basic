const express = require("express");

const app = express();

app.use(() => {
  console.log("");
});

app.listen(4000);
