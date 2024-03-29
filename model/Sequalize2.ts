// sequelize.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite', // Adjust the dialect based on your database type (mysql, postgres, etc.)
  storage: '../picodata/1231231.db', // Adjust the storage path based on your project structure
  logging: false, // Set to true if you want to log SQL queries to the console
});

export { sequelize };
