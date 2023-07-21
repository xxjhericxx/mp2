'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productCategory: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productImage:{
        type: Sequelize.STRING,
        allowNull: true
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};