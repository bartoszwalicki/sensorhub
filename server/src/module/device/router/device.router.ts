import * as express from "express";
import { DeviceController } from "../controller/device.controller";
import { MeasurmentController } from "../../measurment/controller/measurment.controller";

export class DeviceRouter {
  public router: express.Router;

  private deviceController: DeviceController;
  private measurmentsController: MeasurmentController;

  constructor() {
    this.deviceController = new DeviceController();
    this.measurmentsController = new MeasurmentController();

    this.router = express.Router();

    this.router.get("/", this.deviceController.index);
    this.router.get(
      "/:deviceId/measurments",
      this.measurmentsController.indexByDeviceId
    );

    this.router.post("/", this.deviceController.create);
  }
}
