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
      title: 'Add New User',
      date: '2022-06-11',
      status: 'Complete',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }, {
      title: 'Update Some Coding',
      date: '2022-06-12',
      status: 'On Progress',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    }, {
      title: 'Read a Book',
      date: '2022-06-13',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }, {
      title: 'Read Some Web',
      date: '2022-06-14',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {}); 
  }
};
