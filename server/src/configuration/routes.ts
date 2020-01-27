import { DeviceController } from "../controllers/device/device.controller";
import { DeviceRouter } from "../routes/device.router";

export class Routes {
  public deviceController: DeviceController;

  private deviceRouter: DeviceRouter;

  constructor() {
    this.deviceController = new DeviceController();
    this.deviceRouter = new DeviceRouter();
  }

  public routes(app: any): void {
    app.use("/devices", this.deviceRouter.router);
  }
}
