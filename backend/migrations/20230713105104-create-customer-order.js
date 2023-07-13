'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerOrders', {
      orderNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      customerId: {
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        type: Sequelize.UUID
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderQuantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('CustomerOrders');
  }
};