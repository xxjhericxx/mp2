'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      customerId: {
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      customerFirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerLastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerImage:{
        type: Sequelize.STRING,
        allowNull: true
      },
      customerAddress: {
        type: Sequelize.STRING,
        allowNull: true
      },
      customerZipCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      customerCountry: {
        type: Sequelize.STRING,
        allowNull: true
      },
      customerPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      customerEmailAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerPassword: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Customers');
  }
};