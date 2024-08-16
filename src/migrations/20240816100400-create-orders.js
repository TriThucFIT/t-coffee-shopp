"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      customer_id: {
        type: Sequelize.STRING,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      total_products: {
        type: Sequelize.INTEGER,
      },
      total_amount: {
        type: Sequelize.DOUBLE,
      },
      order_date: {
        type: Sequelize.DATE,
      },
      payment_method: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
