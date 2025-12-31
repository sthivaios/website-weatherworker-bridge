import dotenv from "dotenv";
import { initMqtt } from "./lib/client";
dotenv.config();

initMqtt();

process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
  console.error(err);
});
