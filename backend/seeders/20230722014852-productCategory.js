'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.bulkInsert('ProductCategories', [{
      productCategoryTitle: "Shirt",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      productCategoryTitle: "Jacket",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Pants",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Bag",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Shorts",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productCategoryTitle: "Accessory",
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
