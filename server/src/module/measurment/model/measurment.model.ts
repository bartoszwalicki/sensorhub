import {
  Model,
  Column,
  Table,
  ForeignKey,
  DataType,
  BelongsTo
} from "sequelize-typescript";

import { Device } from "../../device/model/device.model";
import { MeasurmentType } from "../../measurment-type/model/measurment-type.model";

@Table({
  timestamps: true
})
export class Measurment extends Model<Measurment> {
  @Column({
    type: DataType.REAL
  })
  public value!: number;

  @ForeignKey(() => Device)
  @Column
  public deviceId!: number;

  @BelongsTo(() => Device)
  device!: Device;

  @ForeignKey(() => MeasurmentType)
  measurmentTypeId!: number;

  @BelongsTo(() => MeasurmentType)
  measurmentType!: MeasurmentType;
}
