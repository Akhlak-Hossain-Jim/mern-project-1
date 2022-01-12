import express from "express";
import AirDataCtrl from "./data.controller.js";

const router = express.Router();

router.route("/").get(AirDataCtrl.apiGetAirData);

export default router;
