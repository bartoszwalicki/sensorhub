import { Model, DataTypes } from "sequelize";
import { database } from "../../..//configuration/database";

export class DeviceModel extends Model {
  public id!: number;
  public name!: string;
  public deviceId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DeviceModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(60)
    },
    deviceId: {
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

DeviceModel.sync({ force: true }).then(() =>
  console.log("Devices table created.")
);
