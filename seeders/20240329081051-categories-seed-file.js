'use strict';

const categoriesData = [
  '中式料理',
  '日本料理',
  '義大利料理',
  '墨西哥料理',
  '素食料理',
  '美式料理',
  '複合式料理',
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      categoriesData.map((category) => ({
        name: category,
        created_at: new Date(),
        updated_at: new Date(),
      }))
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', {});
  },
};
