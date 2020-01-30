import { Device } from "../module/device/model/device.model";
import { DeviceDto } from "../module/device/dto/device.dto";
import * as faker from "faker";
import { Measurment } from "../module/measurment/model/measurment.model";
import { MeasurmentDto } from "../module/measurment/dto/measurment.dto";
import { MeasurmentType } from "../module/measurment-type/model/measurment-type.model";

export class Seeder {
  public async seed() {
    MeasurmentType.create({
      type: "Temperature",
      postfix: "°C"
    } as MeasurmentType)
      .then(() => {
        return MeasurmentType.create({
          type: "Humidity",
          postfix: "%"
        } as MeasurmentType);
      })
      .then(() => {
        for (let i = 0; i < 10; i++) {
          Device.create<Device>({
            deviceHardwareId: faker.random.uuid(),
            name: faker.lorem.words(2)
          } as DeviceDto).then(device => {
            for (let j = 0; j < 1000; j++) {
              Measurment.create({
                deviceId: device.id,
                value: (Math.random() * 10) / 2,
                measurmentTypeId: Math.floor(Math.random() * 2) + 1
              } as MeasurmentDto);
            }
          });
        }
      });
  }
}
