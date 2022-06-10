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

    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Add new user',
        date: new Date(),
        status: 'Complete',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        title: 'Update some coding',
        date: new Date(),
        status: 'On Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      }, 
      {
        title: 'Read a Book',
        date: new Date(),
        status: 'To Do', 
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      }, 
      {
        title: 'Read some Web',
        date: new Date(),
        status: 'On Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
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

    await queryInterface.bulkDelete('Todos', null, {})
  }
};
