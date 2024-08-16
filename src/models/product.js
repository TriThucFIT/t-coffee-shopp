const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      // Nhiều-nhiều với Variant
      Product.belongsToMany(models.Variant, { through: models.ProductVariant, foreignKey: 'product_id', as: 'variants' });
      // Nhiều-nhiều với Order thông qua bảng OrderProduct
      Product.belongsToMany(models.Order, { through: models.OrderProduct, foreignKey: 'product_id', as: 'orders' });
      // Nhiều-nhiều với Category thông qua bảng ProductCategory
      Product.belongsToMany(models.Category, { through: models.ProductCategory, foreignKey: 'product_id', as: 'categories' });
    }
  }

  Product.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
    timestamps: true
  });

  return Product;
};
