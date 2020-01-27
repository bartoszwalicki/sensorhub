import { Sequelize } from "sequelize";

export const database = new Sequelize("sensorhub", "sensorhub", "shpass", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
