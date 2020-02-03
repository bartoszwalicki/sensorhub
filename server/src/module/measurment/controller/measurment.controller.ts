import { DestroyOptions } from "sequelize/types";

import { MeasurmentDto } from "../dto/measurment.dto";

import { Measurment } from "../model/measurment.model";
import { Device } from "../../device/model/device.model";

export class MeasurmentController {
  public index(req: any, res: any) {
    Measurment.findAll<Measurment>()
      .then((measurments: Array<Measurment>) => {
        res.json(measurments);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public indexByDeviceId(req: any, res: any) {
    const deviceId = req.params.id;

    if (!deviceId) {
      res.status(404).send("Wrong device id.");
    }

    Measurment.findAll({
      where: {
        deviceId: deviceId
      }
    }).then(measurments => {
      res.status(200).json(measurments);
    });
  }

  public create(req: any, res: any) {
    const params: MeasurmentDto = req.body;

    Device.findOne({
      attributes: ["id"],
      where: { deviceHardwareId: params.deviceId }
    })
      .then(device => {
        return Measurment.create({
          value: params.value,
          deviceId: device.id
        });
      })
      .then(measurment => {
        res.status(200).json(measurment);
      });
  }

  public delete(req: any, res: any) {
    const id: number = Number.parseInt(req.params.id, 10);

    const destroyOptions: DestroyOptions = {
      where: { id }
    };

    Measurment.destroy(destroyOptions)
      .then(() => res.sendStatus(204))
      .catch((error: Error) => res.status(500).json(error));
  }
}
