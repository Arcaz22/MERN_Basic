const express = require("express");

const app = express();
const router = express.Router();

/* 
req = Request
res = Respons
Next = Mengkakses lebih dari 1
*/
router.use("/products", (req, res, next) => {
  res.json({
    name: "Chandra Arcychan Azfar",
    email: "chandraarcychan@gmail.com",
  });
  next();
});

router.use("/price", (req, res, next) => {
  res.json({
    price: 1000,
  });
  next();
});

router.delete("/customers", (req, res, next) => {
  res.json({
    title: "Customer",
  });
  next();
});

app.use("/", router);

// GET '/users' ==> [{name: Chandra}]

app.listen(4000);
