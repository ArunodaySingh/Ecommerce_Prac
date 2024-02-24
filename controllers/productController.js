const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

// get all products
exports.getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get Info of product
exports.getProductInfo = async (req, res,next) => {
  try {
    const productId = req.params.id;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

if (!isValidObjectId) {
  return next(new ErrorHandler("Invalid Product ID", 400));
}
    const isProductExist = await productModel.findById(productId);
    if (!isProductExist) {
     return next(new ErrorHandler("Product Not Found",404));
    }
    res.status(200).json({ success: true, message: isProductExist });
  } catch (error) {
    console.log(error);
  }
};

// ---Admin---
exports.createProduct = async (req, res) => {
  try {
    // either use create which is static or use
    const product = new productModel(req.body);
    product.save();
    // const product = await productModel.create(req.body);
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---Admin---
exports.updateProduct = async (req, res) => {
  try {
    const isProductExist = await productModel.findById(req.params.id);
    if (!isProductExist) {
      res
        .status(404)
        .json({ success: false, message: "Product doesn't exist" });
    }
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({ success: true, message: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- Admin ----
exports.deleteProduct = async (req, res) => {
  try {
    const isProductExist = await productModel.findById(req.params.id);
    if (!isProductExist) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    await productModel.findByIdAndDelete(productId);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};