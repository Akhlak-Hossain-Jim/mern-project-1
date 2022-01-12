import { parse } from "dotenv";
import AirData from "./data/data.js";

export default class AirDataCtrl {
  static async apiGetAirData(req, res, next) {
    const airDataPerPage = req.query.airDataPerPage
      ? parseInt(req.query.airDataPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.name) {
      filters.name = filters.query.name;
    }

    const { airDataList, totalNumAriData } = await AirData.getAirData({
      filters,
      page,
      airDataPerPage,
    });

    let response = {
      airData: airDataList,
      page: page,
      filters: filters,
      entries_per_page: airDataPerPage,
      total_result: totalNumAriData,
    };
    res.json(response);
  }
}
