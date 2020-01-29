import { Model } from "sequelize";

import { DataTypes } from "sequelize";

import { database } from "../../../configuration/database";
import { MeasurmentModel } from "../../measurment/model/measurment.model";

export class DeviceModel extends Model {
  public id!: number;
  public name!: string;
  public deviceHardwareId!: string;
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
        name: {
          type: new DataTypes.STRING(60)
        },
        deviceHardwareId: {
          type: new DataTypes.STRING(12),
          allowNull: false,
          unique: true
        }
      },
      {
        tableName: "devices",
        sequelize: database
      }
    );

    DeviceModel.sync({ force: forcedInit }).then(() =>
      console.log("Devices table created.")
    );
  }

  public static associate(): void {
    this.hasMany(MeasurmentModel);
  }
}
