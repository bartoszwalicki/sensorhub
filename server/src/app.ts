import * as express from "express";
import * as bodyParser from "body-parser";
import { RoutesConfiguration } from "./configuration/routes";

import { database } from "./configuration/database";

class App {
  public app: express.Application;
  private routesConfiguration: RoutesConfiguration;

  constructor() {
    this.app = express();
    this.configureExpress();
    this.routesConfiguration = new RoutesConfiguration();
    this.routesConfiguration.initRoutes(this.app);

    database.sync({ force: true });
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
