'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        username: 'alexgoz',
        email: 'alex@mail.com',
        password: '11223344',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'godjirah',
        email: 'admin@admin.com',
        password: '33445566',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {})
  }
};
