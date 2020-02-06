import { Sequelize } from "sequelize-typescript";
import { Device } from "../module/device/model/device.model";
import { Measurment } from "../module/measurment/model/measurment.model";
import { MeasurmentType } from "../module/measurment-type/model/measurment-type.model";

export const database = new Sequelize("sensorhub", "sensorhub", "shpass", {
  host: "db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  models: [Device, Measurment, MeasurmentType]
});
