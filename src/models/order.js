const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Order extends Model {
    static associate(models) {
      // Nhiều-nhiều với Product thông qua bảng OrderProduct
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct,
        foreignKey: "order_id",
        as: "products",
      });
      // Liên kết với Customer
      Order.belongsTo(models.Customer, {
        foreignKey: "customer_id",
        as: "customer",
      });
    }
  }

  Order.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      customer_id: {
        type: DataTypes.STRING,
        references: {
          model: "Customers",
          key: "id",
        },
        
      },
      shipping_address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shipping_fee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      total_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
      timestamps: true,
    }
  );

  return Order;
};
