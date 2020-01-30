import { DeviceRouter } from "../module/device/router/device.router";
import { MeasurmentRouter } from "../module/measurment/router/measurment.router";
import { MeasurmentTypeRouter } from "../module/measurment-type/router/measurment-type.router";

export class RoutesConfiguration {
  private deviceRouter: DeviceRouter;
  private measurmentRouter: MeasurmentRouter;
  private measurmentTypeRouter: MeasurmentTypeRouter;

  constructor() {
    this.deviceRouter = new DeviceRouter();
    this.measurmentRouter = new MeasurmentRouter();
    this.measurmentTypeRouter = new MeasurmentTypeRouter();
  }

  public initRoutes(app: any): void {
    app.use("/devices", this.deviceRouter.router);
    app.use("/measurments", this.measurmentRouter.router);
    app.use("/measurmentTypes", this.measurmentTypeRouter.router);
  }
}
