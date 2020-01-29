import { DeviceRouter } from "../module/device/router/device.router";
import { MeasurmentRouter } from "../module/measurment/router/measurment.router";

export class RoutesConfiguration {
  private deviceRouter: DeviceRouter;
  private measurmentRouter: MeasurmentRouter;

  constructor() {
    this.deviceRouter = new DeviceRouter();
    this.measurmentRouter = new MeasurmentRouter();
  }

  public initRoutes(app: any): void {
    app.use("/devices", this.deviceRouter.router);
    app.use("/measurments", this.measurmentRouter.router);
  }
}
