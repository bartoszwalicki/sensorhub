import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./configuration/routes";

class App {
  public app: express.Application;
  private routesBarrell: Routes;

  constructor() {
    this.app = express();
    this.configureExpress();
    this.routesBarrell = new Routes();
    this.routesBarrell.routes(this.app);
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
