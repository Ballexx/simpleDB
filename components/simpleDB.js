const dbCommands = require('./dbCommands')

module.exports.read = function(databasename){return dbCommands.readCommand(databasename)}
module.exports.write = function(databasename, tableName, items){return dbCommands.writeCommand(databasename, tableName, items)}
module.exports.deleteTable = function(databasename, tableName){return dbCommands.deleteTable(databasename, tableName)}