/**
 * CRUD operations for Customer
 * @module services/Customer.service
 */

const { Customer } = require("../models");

/**
 * Get all customers
 * @returns {Promise<Customer[]>} A promise that contains the customers
 *
 */
exports.getAllCustomers = async () => {
  return await Customer.findAll({
    order: [["createdAt", "DESC"]],
  });
};

/**
 * Get a customer by id
 * @param {string} id - The id of the customer
 * @param {Object} options - The options for the query, e.g., transaction
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.getCustomerById = async (id, options = {}) => {
  return await Customer.findByPk(id, options);
};

/**
 * Create a customer
 * @param {object} customer - The customer object
 * @param {Object} options - The options for the query, e.g., transaction
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.createCustomer = async (customer, options = {}) => {
  return await Customer.create(customer, options);
};

/**
 * Update a customer
 * @param {string} id - The id of the customer
 * @param {object} customer - The customer object
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.updateCustomer = async (id, customer, options = {}) => {
  const [affectRow] = await Customer.update(
    customer,
    {
      where: {
        id,
      },
    },
    options
  );
  return affectRow;;
};

/**
 * Delete a customer
 * @param {string} id - The id of the customer
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.deleteCustomer = async (id) => {
  return await Customer.destroy({
    where: {
      id,
    },
  });
};

/**
 * Get all orders of a customer
 * @param {string} customerId - The id of the customer
 * @returns {Promise<Order[]>} A promise that contains the orders
 */
exports.getOrdersByCustomerId = async (customerId) => {
  return await Customer.findByPk(customerId, {
    include: "Orders",
  });
};
