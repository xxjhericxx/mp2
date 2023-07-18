'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerOrder.init({
    orderNumber: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    customerId: {
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      type: DataTypes.UUID
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'CustomerOrder',
  });
  return CustomerOrder;
};