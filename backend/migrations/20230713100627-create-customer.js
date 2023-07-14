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
        type: DataTypes.STRING,
        allowNull: true
      },
      customerAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerZipCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerCountry: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerEmailAddress: {
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