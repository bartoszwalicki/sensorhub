import { Router } from "express";
import { DeviceController } from "../controller/device.controller";

export class DeviceRouter {
  public router: Router;

  private deviceController: DeviceController;

  constructor() {
    this.router = Router();
    this.deviceController = new DeviceController();

    this.router.get("/", this.deviceController.index);
    this.router.post("/", this.deviceController.create);
  }
}
