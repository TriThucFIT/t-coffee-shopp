/**
 * @file This file defines the Customer controller.
 * @module CustomerController
 *
 */

const  CustomerService  = require("../services/Customer.service");

/**
 * Get all customers
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Promise<Response>} A promise that contains the response
 *
 */

exports.getAllCustomers = async (req, res) => {
  const customers = await CustomerService.getAllCustomers();
  return res.status(200).json(customers);
};

/**
 * Get a customer by id
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Promise<Response>} A promise that contains the response
 *
 */
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  const customer = await CustomerService.getCustomerById(id);
  return res.status(200).json(customer);
};

/**
 * Create a customer
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Promise<Response>} A promise that contains the response
 *
 */
exports.createCustomer = async (req, res) => {
  const customer = await CustomerService.createCustomer(req.body);
  return res.status(201).json(customer);
}

/**
 * Update a customer
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Promise<Response>} A promise that contains the response
 *
 */
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const customer = await CustomerService.updateCustomer(id, req.body);
  return res.status(200).json(customer);
}

/**
 * Delete a customer
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Promise<Response>} A promise that contains the response
 *
 */
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  await CustomerService.deleteCustomer(id);
  return res.status(204).end();
}