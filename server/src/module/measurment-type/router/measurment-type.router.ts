import * as express from "express";
import { MeasurmentTypeController } from "../controller/measurment-type.controller";

export class MeasurmentTypeRouter {
  public router: express.Router;

  private measurmentTypeController: MeasurmentTypeController;

  constructor() {
    this.measurmentTypeController = new MeasurmentTypeController();
    this.router = express.Router();

    this.router.get("/", this.measurmentTypeController.index);
  }
}
