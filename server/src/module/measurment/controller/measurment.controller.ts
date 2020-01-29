import { DestroyOptions } from "sequelize/types";
import { MeasurmentModel } from "../model/measurment.model";
import { MeasurmentDto } from "../dto/measurment.dto";
import { DeviceModel } from "../../device/model/device.model";

export class DeviceController {
  public index(req: any, res: any) {
    MeasurmentModel.findAll<MeasurmentModel>({})
      .then((devices: Array<MeasurmentModel>) => {
        res.json(devices);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: any, res: any) {
    const params: MeasurmentDto = req.body;

    DeviceModel.findOne({
      attributes: ["id"],
      where: { deviceHardwareId: params.deviceId }
    });

    MeasurmentModel.create<MeasurmentModel>(params)
      .then((measurment: MeasurmentModel) => res.status(201).json(measurment))
      .catch((error: Error) => res.status(500).json(error));
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
