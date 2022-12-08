const { devLogger, prodLogger } = require("./loggers")
require("dotenv").config()

const env = process.env.NODE_ENV
let logger = null;

if (env === "dev") {
      logger = devLogger()
}else{
      logger = prodLogger()
}

 module.export = logger




// {error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6}