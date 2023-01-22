exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      name: "Coklat",
      price: 10000,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Success",
    data: {
      id: 1,
      name: "Coklat",
      price: 10000,
    },
  });
  next();
};
