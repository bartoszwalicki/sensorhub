import { DeviceController } from "../module/device/controller/device.controller";
import { DeviceRouter } from "../module/device/router/device.router";

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
