'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Customers', [{
      customerId: "6aaf190e-0eb2-4272-a244-0c5f1ae66d82",
      customerFirstName: "Admin",
      customerLastName: "Admin",
      customerEmailAddress: "admin@admin.com",
      customerPassword: "YWRtaW5wYXNz",
      customerRole: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Customers', null, {});
     
  }
};
