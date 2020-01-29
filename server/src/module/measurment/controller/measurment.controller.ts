import { DestroyOptions } from "sequelize/types";
import { MeasurmentModel } from "../model/measurment.model";
import { MeasurmentDto } from "../dto/measurment.dto";
import { DeviceModel } from "../../device/model/device.model";

export class MeasurmentController {
  public index(req: any, res: any) {
    MeasurmentModel.findAll<MeasurmentModel>()
      .then((measurments: Array<MeasurmentModel>) => {
        res.json(measurments);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: any, res: any) {
    const params: MeasurmentDto = req.body;

    DeviceModel.findOne({
      attributes: ["id"],
      where: { deviceHardwareId: params.deviceId }
    })
      .then(device => {
        return MeasurmentModel.create({
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

    MeasurmentModel.destroy(destroyOptions)
      .then(() => res.sendStatus(204))
      .catch((error: Error) => res.status(500).json(error));
  }
}
