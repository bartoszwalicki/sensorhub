import { DeviceModel } from "../model/device.model";
import { DeviceDto } from "../dto/device.dto";
import { DestroyOptions } from "sequelize/types";

export class DeviceController {
  public index(req: any, res: any) {
    DeviceModel.findAll<DeviceModel>({})
      .then((devices: Array<DeviceModel>) => {
        res.json(devices);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: any, res: any) {
    const params: DeviceDto = req.body;

    DeviceModel.create<DeviceModel>(params)
      .then((device: DeviceModel) => res.status(201).json(device))
      .catch((error: Error) => res.status(500).json(error));
  }

  public delete(req: any, res: any) {
    const id: number = Number.parseInt(req.params.id, 10);

    const destroyOptions: DestroyOptions = {
      where: { id }
    };

    DeviceModel.destroy(destroyOptions)
      .then(() => res.sendStatus(204))
      .catch((error: Error) => res.status(500).json(error));
  }
}
