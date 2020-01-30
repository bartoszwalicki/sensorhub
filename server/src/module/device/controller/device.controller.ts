import { DeviceDto } from "../dto/device.dto";

import { DestroyOptions } from "sequelize/types";

import { Device } from "../model/device.model";

export class DeviceController {
  public index(req: any, res: any) {
    Device.findAll<Device>({})
      .then((devices: Array<Device>) => {
        res.json(devices);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: any, res: any) {
    const params: DeviceDto = req.body;

    Device.create<Device>(params)
      .then((device: Device) => res.status(201).json(device))
      .catch((error: Error) => res.status(500).json(error));
  }

  public delete(req: any, res: any) {
    const id: number = Number.parseInt(req.params.id, 10);

    const destroyOptions: DestroyOptions = {
      where: { id }
    };

    Device.destroy(destroyOptions)
      .then(() => res.sendStatus(204))
      .catch((error: Error) => res.status(500).json(error));
  }
}
