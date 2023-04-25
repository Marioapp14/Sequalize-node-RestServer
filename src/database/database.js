import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();


export const sequalize = new Sequelize({
  database: process.env.DB_NAME ,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

