'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.Users);
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title can't be empty`
        }
      }
    },
    date: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: ['On Progress', 'Complete', 'To Do', ''],
      defaultValue: 'To Do',
      validate: {
        isIn: [['On Progress', 'Complete', 'To Do', '']]
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};