/**
 * CRUD operations for ProductCategory
 */

const { ProductCategory } = require("../models");

/**
 * Create a productCategory
 * @param {object} productCategory - The productCategory object
 *
 * @returns {Promise<ProductCategory>} A promise that contains the productCategory
 *
 */

exports.createProductCategory = async (productCategory) => {
  return await ProductCategory.create(productCategory);
};

/**
 * Update a productCategory
 * @param {string} id - The id of the productCategory
 * @param {object} productCategory - The productCategory object
 * @returns {Promise<ProductCategory>} A promise that contains the productCategory
 *
 */
exports.updateProductCategory = async (id, productCategory) => {
  const updatedProductCategory = await ProductCategory.update(productCategory, {
    where: {
      id,
    },
    returning: true,
  });
  return updatedProductCategory[1][0];
};

/**
 * Delete a productCategory
 * @param {string} id - The id of the productCategory
 * @returns {Promise<ProductCategory>} A promise that contains the productCategory
 *
 */
exports.deleteProductCategory = async (id) => {
  return await ProductCategory.destroy({
    where: {
      id,
    },
  });
};

/**
 * Get all productCategories
 * @returns {Promise<ProductCategory[]>} A promise that contains the productCategories
 *
 */
exports.getAllProductCategories = async () => {
  return await ProductCategory.findAll();
};
