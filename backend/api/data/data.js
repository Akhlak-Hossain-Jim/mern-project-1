let airData;

export default class AirData {
  static async injectDB(conn) {
    if (airData) {
      return;
    }
    try {
      airData = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("listingsAndReviews");
    } catch (e) {
      console.error(`Unable to establish a collection handle in data: ${e}`);
    }
  }

  static async getAirData({
    filters = {},
    page = 0,
    airDataPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      }
    }

    let cursor;

    try {
      cursor = await airData.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { airDataList: [], totalNumAriData: 0 };
    }

    const displayCursor = cursor
      .limit(airDataPerPage)
      .skip(airDataPerPage * page);

    try {
      const airDataList = await displayCursor.toArray();
      const totalNumAriData = await airData.countDocuments(query);

      return { airDataList, totalNumAriData };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { airDataList: [], totalNumAriData: 0 };
    }
  }
}
