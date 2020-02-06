import { Measurment } from "../model/measurment.model";
import { WhereOptions } from "sequelize";

export class MeasurmentService {
  public static findAll(
    page: number = 0,
    deviceId: number = null
  ): Promise<Array<Measurment>> {
    let params = {};
    const pageSize = 10;

    if (deviceId) {
      params = { where: { deviceId } as WhereOptions };
    }

    return Measurment.count(params).then((itemCount: number) => {
      let pages = Math.ceil(itemCount / pageSize);

      if(page > pages) {
          page = pages;
      }

      Object.assign(params, { ...params, offset: page, limit: pageSize, order: [['createdAt', 'ASC']] });

      return Measurment.findAll(params);
    });
  }
}
