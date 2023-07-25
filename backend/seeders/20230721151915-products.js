'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Products', [{
      productCode: "BK2113",
      productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      productDescription: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      productCategory: "Bag",
      productImage: "uploads/1689950762688_18371933.jpg",
      productPrice: 109.95,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "TS3124",
      productName: "Mens Casual Premium Slim Fit T-Shirts",
      productDescription: "very Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket. item",
      productCategory: "Shirt",
      productImage: "uploads/1689950784119_31847808.jpg",
      productPrice: 22.3,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "JK9692",
      productName: "Mens Cotton Jacket",
      productDescription: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      productCategory: "Jacket",
      productImage: "uploads/1689950909019_100794975.jpg",
      productPrice: 55.99,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "JK1112",
      productName: "Mens Casual Slim Fit",
      productDescription: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      productCategory: "Jacket",
      productImage: "uploads/1689950940326_77228179.jpg",
      productPrice: 15.99,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "JK3252",
      productName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      productDescription: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      productCategory: "Jacket",
      productImage: "uploads/1689950948567_77450854.jpg",
      productPrice: 56.99,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "JK7023",
      productName: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      productDescription: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      productCategory: "Jacket",
      productImage: "uploads/1689950955966_92403020.jpg",
      productPrice: 29.95,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "JK3206",
      productName: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      productDescription: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      productCategory: "Jacket",
      productImage: "uploads/1689950973968_73438510.jpg",
      productPrice: 39.99,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "SH5702",
      productName: "MBJ Women's Solid Short Sleeve Boat Neck V",
      productDescription: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem ",
      productCategory: "Shirt",
      productImage: "uploads/1689950980448_51837565.jpg",
      productPrice: 9.85,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "SH7337",
      productName: "Opna Women's Short Sleeve Moisture",
      productDescription: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      productCategory: "Shirt",
      productImage: "uploads/1689950994131_80981653.jpg",
      productPrice: 7.95,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      productCode: "SH3691",
      productName: "DANVOUY Womens T Shirt Casual Cotton Short",
      productDescription: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      productCategory: "Shirt",
      productImage: "uploads/1689951001554_73603482.jpg",
      productPrice: 12.99,
      productQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};
