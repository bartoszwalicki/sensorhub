import express, { Application } from "express";
import bodyParser from "body-parser";
import { RoutesConfiguration } from "./configuration/routes";

class App {
  public app: any;
  private routesConfiguration: RoutesConfiguration;

  constructor() {
    this.app = express();
    this.configureExpress();
    this.routesConfiguration = new RoutesConfiguration();
    this.routesConfiguration.initRoutes(this.app);
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
