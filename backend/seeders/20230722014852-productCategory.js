'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.bulkInsert('ProductCategories', [{
      productCategoryTitle: "Shirts",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      productCategoryTitle: "Jackets",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Pants",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Bags",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Shorts",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Accessories",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
