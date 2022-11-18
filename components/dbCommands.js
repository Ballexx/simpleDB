const fs = require("fs");
const read = require("./dbReader");
const write = require("./dbWriter");
const remove = require("./dbDelete");
const update = require("./dbUpdate");

module.exports.readCommand = function (databaseName) {
	let data = fs.readFileSync(databaseName);
	return read.readDB(data.toString());
};

module.exports.writeCommand = function (databaseName, tableName, items) {
	try {
		JSON.parse(items);
	} catch (e) {
		return console.log(e + " : Items must be in JSON format");
	}

	if (fs.readFileSync(databaseName).toString().indexOf(tableName) != -1)
		return console.log("A table with this name already exists");

	return fs.appendFile(databaseName, write.writeDB(tableName, items), (err) => {
		if (err) throw err;
		console.log("Items have been appended to database");
	});
};

module.exports.createDB = function (databaseName) {
	let dbName = `${databaseName}.db`;

	fs.access(dbName, (err) => {
		if (err)
			return fs.writeFile(dbName, "", (err) => {
				if (err) console.log(err);
			});
		return console.log("Database already exists");
	});
};

module.exports.deleteTable = function (databaseName, tableName) {
	return remove.deleteTable(databaseName, tableName);
};

module.exports.readTableWhere = function (databaseName, tableName) {
	return read.readTableWhere(databaseName, tableName);
};
module.exports.readRowWhere = function (databaseName, rowName) {
	return read.readRowWhere(databaseName, rowName);
};

module.exports.updateTable = function (
	databaseName,
	tableName,
	newTableName,
	items
) {
	return update.updateTable(databaseName, tableName, newTableName, items);
};
module.exports.deleteRows = function (databaseName, rowName) {
	return remove.deleteRows(databaseName, rowName);
};