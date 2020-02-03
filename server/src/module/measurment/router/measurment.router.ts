import * as express from "express";
import { MeasurmentController } from "../controller/measurment.controller";

export class MeasurmentRouter {
  public router: express.Router;

  private measurmentController: MeasurmentController;

  constructor() {
    this.measurmentController = new MeasurmentController();
    this.router = express.Router();

    this.router.get("/", this.measurmentController.index);
    this.router.post("/", this.measurmentController.create);
  }
}
