const dbCommands = require('./dbCommands')

module.exports.read = function(databasename){return dbCommands.readCommand(databasename)}
module.exports.write = function(databasename, tableName, items){return dbCommands.writeCommand(databasename, tableName, items)}
module.exports.deleteTable = function(databasename, tableName){return dbCommands.deleteTable(databasename, tableName)}
module.exports.updateTable = function(databasename, tableName, newTableName, items){return dbCommands.updateTable(databasename, tableName, newTableName, items)}
module.exports.createDB = function(databasename){return dbCommands.createDB(databasename)}
module.exports.readWhere = function(databasename, tableName){return dbCommands.readWhere(databasename, tableName)}