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
    customerImage:{
      type: DataTypes.STRING,
      allowNull: true
    },
    customerAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customerZipCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customerCountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customerPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customerEmailAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerRole: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};