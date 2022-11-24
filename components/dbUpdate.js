const read = require("./dbReader");
const write = require("./dbWriter");
const fs = require("fs");

module.exports.updateTable = function (
	databaseName,
	tableName,
	newTableName,
	items
) {
	let data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");

	oldTable = read.readTableWhere(databaseName, tableName);
	newTable = write.writeDB(newTableName, items);

	data = data.replace(oldTable, newTable);

	
};

module.exports.updateRowWhere = function(databaseName, rowName, rowItem, replaceItem){
    let data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");
    
    findRow = read.readRowWhere(databaseName, rowName);

    for(i = 0; i<findRow.length; i++){
        if(findRow[i].includes(rowItem)){
            data = data.replace(rowItem, replaceItem)
        }
    }

    return fs.writeFileSync(databaseName, data);

}
