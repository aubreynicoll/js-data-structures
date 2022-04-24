const fs = require("fs")
const path = require("path")

for (const item of fs.readdirSync(__dirname)) {
  if (item !== "index.js") {
    exports[item] = require(path.resolve(__dirname, item))
  }
}