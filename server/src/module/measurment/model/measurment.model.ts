import { Model, DataTypes, Association } from "sequelize";

import { database } from "../../..//configuration/database";

import { DeviceModel } from "../../device/model/device.model";

export class MeasurmentModel extends Model {
  public id!: number;
  public deviceId!: string;
  public value!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(): void {
    this.init(
      {
        id: {
          type: new DataTypes.INTEGER(),
          autoIncrement: true,
          primaryKey: true
        },
        value: {
          type: new DataTypes.REAL(),
          allowNull: false
        },
        deviceId: {
          type: new DataTypes.INTEGER(),
          allowNull: false
        }
      },
      {
        tableName: "measurments",
        sequelize: database
      }
    );
  }

  public static associate(): void {
    this.belongsTo(DeviceModel, {
      foreignKey: "deviceId",
      targetKey: "id",
      as: "device"
    });
  }
}
