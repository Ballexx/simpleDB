const read = require("./dbReader");
const fs = require("fs");

module.exports.deleteTable = function (databaseName, tableName) {
	data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");

	removeTable = read.readTableWhere(databaseName, tableName);
	data = data.replace(removeTable, "");

	return fs.writeFileSync(databaseName, data);
};

module.exports.deleteRows = function (databaseName, rowName) {
	data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");

	removeInstance = read.readRowWhere(databaseName, rowName);

	for (i = 0; i < removeInstance.length; i++) {
		data = data.replace(`${removeInstance[i]},`, "");
	}

	return fs.writeFileSync(databaseName, data);
};
