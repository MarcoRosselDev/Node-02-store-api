const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);
  let result = Product.find(queryObject);
  if (sort) {
    console.log(sort);
    // products = products.sort();
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};
// {{URL}}/products?name=john&featured=true on postman then log= { name: 'john', featured: 'true' }

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
