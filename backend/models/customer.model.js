'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customerId: {
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    customerFirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerLastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerZipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerCountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerEmailAddress: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};