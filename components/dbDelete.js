const read = require("./dbReader");
const fs = require("fs");

module.exports.deleteTable = function (databaseName, tableName) {

    data = fs.readFileSync(databaseName).toString()
    data = data.replace(/\s+/g, "");

    removeTable = read.readWhere(databaseName,tableName)
    data = data.replace(removeTable, '')

    return fs.writeFileSync(databaseName, data)
};
