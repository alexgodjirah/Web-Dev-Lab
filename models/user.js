'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, {
        foreignKey: 'UserId'
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Username must be unique'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username can not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email must be unique'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password can not be empty'
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      validate: {
        isIn: [['user', 'admin']],
        notEmpty: {
          args: true,
          msg: 'role can not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};