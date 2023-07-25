'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    productId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    productCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productImage:{
      type: DataTypes.STRING,
      allowNull: true
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};