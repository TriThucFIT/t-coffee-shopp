/**
 * Product Controller
 * @module ProductController
 */

const productService = require("../services/Product.service");

/**
 * Get all products
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a product by id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a product
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.createProduct = async (req, res) => {
  const { body } = req;
  try {
    const product = await productService.createProduct(body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update a product
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const product = await productService.updateProduct(id, body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a product
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.deleteProduct(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get all products by category Id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.getProductsByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await productService.getProductsByCategoryId(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get all products by category name
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 *
 */
exports.getProductsByCategoryName = async (req, res) => {
  const { name } = req.params;
  try {
    const products = await productService.getProductsByCategoryName(name);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get all categories of a product id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
exports.getCategoriesByProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await productService.getCategoriesByProductId(id);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get products by order id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.getProductsByOrderId = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await productService.getProductsByOrderId(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get order by product id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.getOrderByProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await productService.getOrdersByProductId(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
