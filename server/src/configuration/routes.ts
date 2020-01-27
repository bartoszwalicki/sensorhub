import { DeviceController } from "../controllers/device/device.controller";

export class Routes {
  public deviceController: DeviceController;

  constructor() {
    this.deviceController = new DeviceController();
  }

  public routes(app: any): void {
    app.route("/devices").get(this.deviceController.index);
    app.route("/devices").post(this.deviceController.create);
  }
}
