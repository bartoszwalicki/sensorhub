import * as express from "express";
import * as bodyParser from "body-parser";
import { RoutesConfiguration } from "./configuration/routes";

import { initializeDeviceModel } from "./module/device/model/device.model-init";
import { DeviceModel } from "./module/device/model/device.model";
import { MeasurmentModel } from "./module/measurment/model/measurment.model";

class App {
  public app: express.Application;
  private routesConfiguration: RoutesConfiguration;

  constructor() {
    this.app = express();
    this.configureExpress();
    this.initializeModels();
    this.initializeAssiciations();
    // this.routesConfiguration = new RoutesConfiguration();
    // this.routesConfiguration.initRoutes(this.app);
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeModels(): void {
    const forcedInit = true;
    DeviceModel.initialize(forcedInit);
    MeasurmentModel.initialize(forcedInit);
  }

  private initializeAssiciations(): void {
    DeviceModel.associate();
    MeasurmentModel.associate();
  }
}

export default new App().app;
