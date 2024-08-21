const { model } = require('mongoose');
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class VariantOption extends Model {
        static associate(models) {
            VariantOption.belongsTo(models.Variant, {foreignKey: 'variant_id', as: 'variant'});
        }
    }

    VariantOption.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement : true,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        additional_price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        variant_id: {
            type: DataTypes.STRING,
            references: {
                model: 'Variants',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'VariantOption',
        tableName: 'VariantOptions',
        timestamps: true
    });

    return VariantOption;
};