require("dotenv").config();
const db_username = process.env.DB_username;
const db_password = process.env.db_password;

// 1. Sequelize Creation...
const { Sequelize, DataTypes, Model, Deferrable } = require("sequelize");

const sequelize = new Sequelize("sequelize_trial", db_username, db_password, {
    host: "localhost",
    dialect: "postgres",
    define: {
        // This is used to stop auto-pluralization performed.
        // freezeTableName: true
    },
});

// 2. Testing Connection...
(async function test() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
})();

// 3. Creating Model... =>
// 3a. Using sequelize.define:
// sequelize.define()
const Account = sequelize.define(
    "Account",
    {
        // Model Attributes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // We can tell Sequelize the name of the table directly by calling them.
        // tableName: 'User'
    }
);
console.log(Account === sequelize.models.Account);

// 3b. Using Extending Model:
class Profile extends Model {}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize, // Pass the connection instance
        modelName: "Profile", // Choose the model name
        createdAt: false,
        updatedAt: "updateTimestamps",
    }
);
console.log(Profile === sequelize.models.Profile);

const account = new Account({
    username: "alexgodjirah",
    email: "alex@mail.com",
    password: "hello world",
});

const profile = new Profile({
    firstName: "alexander",
    lastName: "gozali",
    phoneNumber: "081330768081",
});

console.log(account.username, account.id, account.createdAt);
console.log(profile.lastName, profile.updateTimeStamps);

// 4. Model Synchronization...

// Sequelize will automatically perform an SQL query to the database. Note that this changes only the table in the database, not the model in the JavaScript Side.
// const account_sync = await Account.sync(); // Creates the table if it doesn't exist (and does nothing if it already exists).
// await Account.sync({ force: true }); // Creates the table, dropping it first if it already exited.
// await Account.sync({ alter: true }); // Checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

// 4a. Synchronize all models at once
// const sequelize_sync = await sequelize.sync({ force: true });
// console.log("all models were synchronized successfully.");

// 5. Drop Tables...
// await Account.drop(); // Drop the model's table
// await sequelize.drop(); // Drop all tables

// 6. Database Safety Checks...
// const safety_sync = await sequelize.sync({ force: true, match: /_test$/ }); // This will run .sync() only if database name ends with '_test'.

// 7. Timestamps
// By default, Sequelize automatically adds the fields `createdAt` and `updatedAt` to every model, using the data type `DataTypes.DATE`. Thos fields are automatically managed as well - whenever we use Sequelize to create or update something.
// 7a. Stop timestamps using `timestamps: false` option:
const Posts = sequelize.define("Posts", {}, { timestamps: false }); //

// 7b. Enable only one of `createdAt`/`updatedAt`:
class Reels extends Model {}

Reels.init(
    {},
    {
        sequelize,
        createdAt: false,
        updatedAt: "updateTimestamps", // updatedAt to be called updateTimestamp
    }
);

// 8. Default Value
// 8a. Change the value of null into certain value using `defaultValue`
const Foom = sequelize.define("Foom", {
    name: {
        type: DataTypes.STRING,
        defaultValue: "alexander",
    },
});

// 8b. Some special values, such as `DataType.NOW` are also accepted:
const Flower = sequelize.define("Flower", {
    dateFound: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW, // The current date/time will be used to populate this column.
    },
});

// 9. Column Options
class Foo extends Model {}

Foo.init(
    {
        flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
        myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

        // setting `allowNull` to false will add NOT NULL to the column, which means an error will be thrown from the DB when the query is executed if the column is null.
        // If we want to check that a value is not null before querying the DB, look at the validations section below:
        title: { type: DataTypes.STRING, allowNull: false },

        // Creating two objects with the same value will throw an error. The unique property can be either a boolean, or a string. If we provide the same string for multiple columns, they will form a composite unique key.
        uniqueOne: { type: DataTypes.STRING, unique: "compositeIndex" },
        uniqueTwo: { type: DataTypes.INTEGER, unique: "compositeIndex" },

        // The unique property is simply a shorthand to create a unique constraint.
        someUnique: { type: DataTypes.STRING, unique: true },

        // Primary key
        identifier: { type: DataTypes.STRING, primaryKey: true },

        // autoIncrement can be used to create auto_increment integer coloumns
        incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

        // We can specify a custom column name via the 'field' attribute:
        fieldWithUnderscores: {
            type: DataTypes.INTEGER,
            field: "field_with_underscore",
        },

        // It is possible to create foreign keys:
        bar_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Account, // This is a reference to another model
                key: "id", // This is the column name of the referenced model
                deferrable: Deferrable.INITIALLY_IMMEDIATE, // with PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
                /*
            Options:
            -. `Deferrable.INITIALLY_IMMEDIATE` => Immediately check for foreign key constraint. 
            -. `Deferrable.INTIALLY_DEFERRED => Defer all foreign key contraint check to the end of a transaction.  
            -. `Deferrable.NOT` => Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction. 
            */
            },
        },

        // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL, and MSSQL
        commentMe: {
            type: DataTypes.INTEGER,
            comment: "this is a column name that has a comment.",
        },
    },
    {
        sequelize,
        modelName: "Foo",

        // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
        indexes: [{ unique: true, fields: ["someUnique"] }],
    }
);

// 10. Advantage of Models being Classes
class Todo extends Model {
    static classLevelMethod() {
        return "foo";
    }

    instanceLevelMethod() {
        return "bar";
    }

    getFull() {
        return [this.title, this.completation].join(" ");
    }
}

Todo.init(
    {
        title: Sequelize.TEXT,
        completation: Sequelize.BOOLEAN,
    },
    { sequelize }
);

console.log(Todo.classLevelMethod());
const create_todo = Todo.build({ title: "Reading Book", completation: false });

console.log(create_todo.instanceLevelMethod());
console.log(create_todo.getFull());
