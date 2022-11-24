const dbCommands = require('./dbCommands')

module.exports.read = function(databasename){return dbCommands.readCommand(databasename)}
module.exports.write = function(databasename, tableName, items){return dbCommands.writeCommand(databasename, tableName, items)}
module.exports.deleteTable = function(databasename, tableName){return dbCommands.deleteTable(databasename, tableName)}
module.exports.deleteRows = function(databasename, rowName){return dbCommands.deleteRows(databasename, rowName)}
module.exports.updateTable = function(databasename, tableName, newTableName, items){return dbCommands.updateTable(databasename, tableName, newTableName, items)}
module.exports.createDB = function(databasename){return dbCommands.createDB(databasename)}
module.exports.readTableWhere = function(databasename, tableName){return dbCommands.readTableWhere(databasename, tableName)}
module.exports.readRowWhere = function(databasename, rowName){return dbCommands.readRowWhere(databasename, rowName)}
module.exports.updateRowWhere = function(databasename, rowName, rowItem, replaceItem){return dbCommands.updateRowWhere(databasename, rowName, rowItem, replaceItem)}