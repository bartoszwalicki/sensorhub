import { MeasurmentType } from "../model/measurment-type.model";

export class MeasurmentTypeController {
  public index(req: any, res: any) {
    MeasurmentType.findAll<MeasurmentType>({})
      .then((measurmentTypes: Array<MeasurmentType>) => {
        res.json(measurmentTypes);
      })
      .catch((err: Error) => res.status(500).json(err));
  }
}
