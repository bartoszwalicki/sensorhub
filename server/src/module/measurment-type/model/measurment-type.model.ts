import {
  Table,
  Model,
  Column,
  DataType,
  AllowNull
} from "sequelize-typescript";

@Table({
  timestamps: true
})
export class MeasurmentType extends Model<MeasurmentType> {
  @AllowNull(false)
  @Column({ type: DataType.STRING(50) })
  type!: string;

  @Column({ type: DataType.STRING(20) })
  prefix!: string;

  @Column({ type: DataType.STRING(20) })
  postfix!: string;

  @Column({ type: DataType.STRING(500) })
  description!: string;
}
