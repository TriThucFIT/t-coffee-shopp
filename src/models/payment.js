const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Payment extends Model {
    static associate(models) {
        // Một-một với Order
        Payment.hasOne(models.Order, { foreignKey: 'order_id', as: 'orders' });
      
    }
  }

    Payment.init({
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
        order_id: {
        type: DataTypes.STRING,
        references: {
            model: 'Orders',
            key: 'id'
        }
        },
        payment_method: {
        type: DataTypes.ENUM('cash', 'momo', 'zalopay'),
        allowNull: false
        },
        status: {
        type: DataTypes.ENUM('pending', 'success', 'failed'),
        allowNull: false
        },
        amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
        },
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Payment',
        tableName: 'Payments',
        timestamps: true
    });

  return Payment;
};
