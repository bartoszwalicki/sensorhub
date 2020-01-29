import { Model, DataTypes, Association } from "sequelize";

import { database } from "../../..//configuration/database";

import { DeviceModel } from "../../device/model/device.model";

export class MeasurmentModel extends Model {
  public id!: number;
  public deviceId!: string;
  public value!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(forcedInit: boolean = false): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        value: {
          type: new DataTypes.REAL(),
          allowNull: false,
          unique: true
        }
      },
      {
        tableName: "measurments",
        sequelize: database
      }
    );

    MeasurmentModel.sync({ force: forcedInit }).then(() =>
      console.log("Measurment table created.")
    );
  }

  public static associate(): void {
    this.belongsTo(DeviceModel);
  }
}
