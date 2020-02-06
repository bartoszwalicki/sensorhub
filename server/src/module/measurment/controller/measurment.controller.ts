import { DestroyOptions } from "sequelize/types";

import { MeasurmentDto } from "../dto/measurment.dto";

import { Measurment } from "../model/measurment.model";
import { Device } from "../../device/model/device.model";
import { MeasurmentService } from "../service/measurment.service";

export class MeasurmentController {
  public index(req: any, res: any) {
    const page = req.query.page ? Number.parseInt(req.params.page) : 0;

    MeasurmentService.findAll(page)
      .then(measurments => {
        res.status(200).json(measurments);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public indexByDeviceId(req: any, res: any) {
    const deviceId = req.params.deviceId;
    const page = req.query.page ? Number.parseInt(req.params.page) : 0;

    MeasurmentService.findAll(page, deviceId).then(measurments => {
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
