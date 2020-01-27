import { DeviceRouter } from "../module/device/router/device.router";

export class RoutesConfiguration {
  private deviceRouter: DeviceRouter;

  constructor() {
    this.deviceRouter = new DeviceRouter();
  }

  public initRoutes(app: any): void {
    app.use("/devices", this.deviceRouter.router);
  }
}
