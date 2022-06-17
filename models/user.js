'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/passwordHandler');
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
          msg: `Username can't be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: `Email must be unique`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Email can't be empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password can't be empty`
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
          msg: `role can't be empty`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};