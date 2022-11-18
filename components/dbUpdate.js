const read = require("./dbReader");
const write = require("./dbWriter");
const fs = require("fs");

module.exports.updateTable = function (
	databaseName,
	tableName,
	newTableName,
	items
) {
	data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");

	removeTable = read.readTableWhere(databaseName, tableName);
	newTable = write.writeDB(newTableName, items);

	data = data.replace(removeTable, newTable);

	return fs.writeFileSync(databaseName, data);
};
