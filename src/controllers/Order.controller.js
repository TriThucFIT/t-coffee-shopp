/**
 * Controller for Order
 * @module controllers/Order.controller
 *
 */

const sequelize = require("../models").sequelize;
const orderService = require("../services/Order.service");
const OrderProductService = require("../services/OrderProduct.service");
const ProductService = require("../services/Product.service");

/**
 * Get all orders
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

/**
 * Get an order by id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await orderService.getOrderById(id);
    return res.status(200).json(order);
  } catch (error) {
    console.log("Error", error);

    return res.status(500).json({ error: error.message });
  }
};

/**
 * Create an order
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.createOrder = async (req, res) => {
  const order = req.body;
  const transaction = await sequelize.transaction();
  try {
    const newOrder = await orderService.createOrder(order, { transaction });
    const newOrderProducts = await Promise.all(
      order?.products?.map(async (orderProduct) => {
        const product = await ProductService.getProductById(
          orderProduct.product_id
        );

        if (!product) {
          throw new Error(`Product ${orderProduct.product_id} not found`);
        }
        return await OrderProductService.createOrderProduct(
          {
            order_id: newOrder.id,
            product_id: orderProduct.product_id,
            quantity: orderProduct.quantity,
            price: product.price * orderProduct.quantity,
          },
          { transaction }
        );
      })
    );
    await transaction.commit();
    return res.status(201).json({ newOrder, newOrderProducts });
  } catch (error) {
    console.log("Error", error);
    await transaction.rollback();
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Update an order
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const order = req.body;
  try {
    const updatedOrder = await orderService.updateOrder(id, order);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete an order
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  const transaction = await sequelize.transaction();
  console.log("Deleting order : ", id);
  try {
    const order = await orderService.getOrderById(id);

    if (!order) {
      return res.status(404).json({
        error: `Order ${id} not found`,
      });
    }

    await OrderProductService.deleteOrderProductsByOrderId(id, { transaction });
    await orderService.deleteOrder(id, { transaction });
    transaction.commit();
    res.status(204).json({
      message: `Order ${id} deleted`,
    });
  } catch (error) {
    console.log("Error", error);
    transaction.rollback();
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get all orders by user id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */

exports.getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await orderService.getOrdersByUserId(id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
