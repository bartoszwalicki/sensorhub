import {
  Model,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  Association
} from "sequelize";

import { DataTypes } from "sequelize";

import { database } from "../../../configuration/database";
import { MeasurmentModel } from "../../measurment/model/measurment.model";

export class DeviceModel extends Model {
  public id!: number;
  public name!: string;
  public deviceHardwareId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getMeasurments!: HasManyGetAssociationsMixin<MeasurmentModel>;
  public addMeasurment!: HasManyHasAssociationMixin<MeasurmentModel, number>;

  public static associations: {
    measurments: Association<DeviceModel, MeasurmentModel>;
  };

  public static initialize(): void {
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
  }

  public static associate(): void {
    this.hasMany(MeasurmentModel, {
      sourceKey: "id",
      foreignKey: "deviceId",
      as: "measurments"
    });
  }
}
