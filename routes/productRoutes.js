const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductInfo,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProduct).post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductInfo);
module.exports = router;