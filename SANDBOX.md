# Model
npx sequelize model:create --name User --attributes username:string,email:string,password:string,role:enum

npx sequelize model:create --name Todo --attributes title:string,date:dateonly,status:enum

# Migration
npx sequelize migration:create --name add-userid-for-todo

# Seed
npx sequelize seed:generate --name user

npx sequelize seed:generate --name todo