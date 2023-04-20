import Sequelize from "sequelize";



export const sequalize = new Sequelize("projectsdb", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});


