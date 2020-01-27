import { Request, Response } from "express";
import { DeviceModel } from "../../models/device/device.model";
import { DeviceDto } from "../../dto/device.dto";

export class DeviceController {
  public index(req: Request, res: Response) {
    DeviceModel.findAll<DeviceModel>({})
      .then((devices: Array<DeviceModel>) => {
        res.json(devices);
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: DeviceDto = req.body;

    DeviceModel.create<DeviceModel>(params)
      .then((device: DeviceModel) => res.status(201).json(device))
      .catch((error: Error) => res.status(500).json(error));
  }
}
