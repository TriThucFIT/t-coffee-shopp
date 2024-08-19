/**
 * @typedef {import('../models/Order.model').Order} Order
 * @typedef {import('../models/Order.model').OrderProduct} OrderProduct
 * CRUD operations for Orders
 *
 */

/**
 * Create an order
 * @param {Order} order - The order object
 * @param {Object} options - The transaction options
 * @returns {Promise<Order>} A promise that contains the order
 *
 */
const { Order, OrderProduct, Product } = require("../models");

exports.createOrder = async (order, options = {}) => {
  return await Order.create(order, options);
};

/**
 * Get all orders
 * @returns {Promise<Order[]>} A promise that contains the orders
 */
exports.getAllOrders = async () => {
  return await Order.findAll({
    include: [
      {
        model: OrderProduct,
        as: "orderProducts",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
    attributes: { exclude: ["order_id", "product_id", "createAt", "updateAt"] },
  });
};

/**
 * Get an order by id
 * @param {string} id - The order id
 * @returns {Promise<Order>} A promise that contains the order
 */
exports.getOrderById = async (id) => {
  return await Order.findByPk(id, {
    include: [
      {
        model: OrderProduct,
        as: "orderProducts",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
    attributes: { exclude: ["order_id", "product_id", "createAt", "updateAt"] },
  });
};

/**
 * Update an order
 * @param {Order} order - The order object
 * @param {Object} options - The transaction options
 * @returns {Promise<Order>} A promise that contains the order
 */
exports.updateOrder = async (order, options = {}) => {
  return await order.save(options);
};

/**
 * Delete an order
 * @param {String} id - The order id
 * @param {Object} options - The transaction options
 * @returns {Promise<Order>} A promise that contains the order
 */
exports.deleteOrder = async (id, options = {}) => {
  return await Order.destroy({ where: { id } }, options);
};

/**
 * Get all orders by user id
 * @param {string} userId - The user id
 * @returns {Promise<Order[]>} A promise that contains the orders
 */
exports.getOrdersByUserId = async (userId) => {
  return await Order.findAll({
    where: { user_id: userId },
    include: [
      {
        model: OrderProduct,
        as: "orderProducts",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
    attributes: { exclude: ["order_id", "product_id", "createAt", "updateAt"] },
  });
};
