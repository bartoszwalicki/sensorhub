import express from "express";
import { DeviceController } from "../controller/device.controller";

export class DeviceRouter {
  public router: any;

  private deviceController: DeviceController;

  constructor() {
    this.deviceController = new DeviceController();
    this.router = express.Router();

    this.router.get("/", this.deviceController.index);
    this.router.post("/", this.deviceController.create);
  }
}
