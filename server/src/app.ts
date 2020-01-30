import * as express from "express";
import * as bodyParser from "body-parser";
import { RoutesConfiguration } from "./configuration/routes";

import { database } from "./configuration/database";
import { Seeder } from "./seeder/seeder";

class App {
  public app: express.Application;

  private routesConfiguration: RoutesConfiguration;
  private seeder: Seeder;

  constructor() {
    this.app = express();
    this.configureExpress();
    this.routesConfiguration = new RoutesConfiguration();
    this.routesConfiguration.initRoutes(this.app);

    database.sync({ force: false }).then(() => {
      // this.seedDatabase();
    });
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private seedDatabase(): void {
    this.seeder = new Seeder();
    this.seeder.seed();
  }
}

export default new App().app;
