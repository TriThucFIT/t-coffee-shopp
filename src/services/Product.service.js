/**CRUD operations for Product
 * @module services/Product.service
 *
 *
 */
const {
  Product,
  Variant,
  Category,
  OrderProduct,
  Order,
  ProductVariant,
  VariantOption,
} = require("../models");

/**
 * Get all products *
 * @returns {Promise<Product[]>} A promise that contains the products
 */

exports.getAllProducts = async () => {
  return await Product.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Variant,
        as: "variants",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: VariantOption,
            as: "options",
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        as: "categories",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        through: {
          attributes: [],
        },
      },
    ],
  });
};

/**
 * Get a product by id *
 * @param {string} id - The id of the product
 * @returns {Promise<Product>} A promise that contains the product
 */
exports.getProductById = async (id) => {
  return await Product.findByPk(id, {
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Variant,
        as: "variants",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: VariantOption,
            as: "options",
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        as: "categories",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        through: {
          attributes: [],
        },
      },
    ],
  });
};

/**
 * Get a product by name
 * @param {string} name - The name of the product
 * @returns {Promise<Product>} A promise that contains the product
 *
 */
exports.getProductByName = async (name) => {
  return await Product.findOne({
    where: {
      name: name,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Variant,
        as: "variants",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: VariantOption,
            as: "options",
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        as: "categories",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        through: {
          attributes: [],
        },
      },
    ],
  });
};

/**
 * Create a product
 *
 * @param {Object} product - The product object
 * @returns {Promise<Product>} A promise that contains the product
 */
exports.createProduct = async (product) => {
  return await Product.create(product);
};

/**
 * Update a product
 *
 * @param {string} id - The id of the product
 * @param {Object} product - The product object
 * @returns {Promise<Product>} A promise that contains the product
 */
exports.updateProduct = async (id, product) => {
  const updateProduct = await Product.update(product, {
    where: {
      id,
    },
  });
  return updateProduct[1][0];
};

/**
 * Delete a product
 *
 * @param {string} id - The id of the product
 * @returns {Promise<void>} A promise that contains nothing
 */
exports.deleteProduct = async (id) => {
  await Product.destroy({
    where: {
      id,
    },
  });
};

/**
 * Get all variants of a product
 *
 * @param {string} productId - The id of the product
 * @returns {Promise<Variant[]>} A promise that contains the variants
 */
exports.getVariantsByProductId = async (productId) => {
  return await Variant.findAll({
    where: {
      product_id: productId,
    },
  });
};

/**
 * Get all categories of a product
 *
 * @param {string} productId - The id of the product
 * @returns {Promise<Category[]>} A promise that contains the categories
 */
exports.getCategoriesByProductId = async (productId) => {
  return await Category.findAll({
    include: [
      {
        model: Product,
        as: "products",
        where: {
          id: productId,
        },
      },
    ],
  });
};

/**
 * Get all products of a category
 *
 * @param {string} categoryId - The id of the category
 * @returns {Promise<Product[]>} A promise that contains the products
 */
exports.getProductsByCategoryId = async (categoryId) => {
  return await Product.findAll({
    include: [
      {
        model: Category,
        as: "categories",
        where: {
          id: categoryId,
        },
      },
    ],
  });
};
/**
 * Get all products of a category
 *
 * @param {string} categoryName - The name of the category
 * @returns {Promise<Product[]>} A promise that contains the products
 */
exports.getProductsByCategoryName = async (categoryName) => {
  return await Product.findAll({
    include: [
      {
        model: Category,
        as: "categories",
        where: {
          name: categoryName,
        },
      },
    ],
  });
};

/**
 * Get all products of an order
 *
 * @param {string} orderId - The id of the order
 * @returns {Promise<Product[]>} A promise that contains the products
 */
exports.getProductsByOrderId = async (orderId) => {
  return await Product.findAll({
    include: [
      {
        model: OrderProduct,
        as: "order_products",
        where: {
          order_id: orderId,
        },
      },
    ],
  });
};

/**
 * Get all orders of a product
 *
 * @param {string} productId - The id of the product
 * @returns {Promise<Order[]>} A promise that contains the orders
 */

exports.getOrdersByProductId = async (productId) => {
  return await Order.findAll({
    include: [
      {
        model: OrderProduct,
        as: "order_products",
        where: {
          product_id: productId,
        },
      },
    ],
  });
};

/**
 * Add a variant to a product
 *
 * @param {string} productId - The id of the product
 * @param {Object} variantId - The variant object
 * @returns {Promise<Variant>} A promise that contains the variant
 */
exports.addVariantToProduct = async (productId, variantId) => {
  const product = await Product.findByPk(productId);
  const variant = await Variant.findByPk(variantId);
  if (!variant) {
    throw new Error("Variant not found");
  }
  if (!product) {
    throw new Error("Product not found");
  }
  return await ProductVariant.create({
    product_id: productId,
    variant_id: variantId,
  });
};
