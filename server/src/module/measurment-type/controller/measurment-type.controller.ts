import * as express from "express";

import { MeasurmentType } from "../model/measurment-type.model";

export class MeasurmentTypeController {
  public index(req: express.Request, res: express.Response) {
    MeasurmentType.findAll<MeasurmentType>({})
      .then((measurmentTypes: Array<MeasurmentType>) => {
        res.json(measurmentTypes);
      })
      .catch((err: Error) => res.status(500).json(err));
  }
}
