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
  return await Customer.findAll();
};

/**
 * Get a customer by id
 * @param {string} id - The id of the customer
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.getCustomerById = async (id) => {
  return await Customer.findByPk(id);
};

/**
 * Create a customer
 * @param {object} customer - The customer object
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.createCustomer = async (customer) => {
  return await Customer.create(customer);
}

/**
 * Update a customer
 * @param {string} id - The id of the customer
 * @param {object} customer - The customer object
 * @returns {Promise<Customer>} A promise that contains the customer
 *
 */
exports.updateCustomer = async (id, customer) => {
  const updatedCustomer = await Customer.update(customer, {
    where: {
      id,
    },
    returning: true,
  });
  return updatedCustomer[1][0];
}

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
}

/**
 * Get all orders of a customer
 * @param {string} customerId - The id of the customer
 * @returns {Promise<Order[]>} A promise that contains the orders
 */
exports.getOrdersByCustomerId = async (customerId) => {
  return await Customer.findByPk(customerId, {
    include: "Orders",
  });
}

