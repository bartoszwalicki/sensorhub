import {
  Model,
  Column,
  Table,
  HasMany,
  Unique,
  AllowNull
} from "sequelize-typescript";

import { Measurment } from "../../measurment/model/measurment.model";

@Table({
  timestamps: true
})
export class Device extends Model<Device> {
  @Column
  public name!: string;

  @Unique
  @AllowNull(false)
  @Column
  public deviceHardwareId!: string;

  @HasMany(() => Measurment)
  measurments: Array<Measurment>;
}
