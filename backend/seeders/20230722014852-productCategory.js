'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.bulkInsert('ProductCategories', [{
      productCategoryTitle: "Shirts"
     },
    {
      productCategoryTitle: "Jackets"
    },
    {
      productCategoryTitle: "Pants"
    },
    {
      productCategoryTitle: "Bags"
    },
    {
      productCategoryTitle: "Shorts"
    },
    {
      productCategoryTitle: "Accessories"
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
