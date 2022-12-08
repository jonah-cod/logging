const express = require("express");
const { devLogger, prodLogger } = require("./logger/loggers")
require("dotenv").config()

const env = process.env.NODE_ENV
let logger = null;

if (env === "dev") {
      logger = devLogger()
}else{
      logger = prodLogger()
}

const app = express()



app.listen(4040, ()=>logger.info("app started"))