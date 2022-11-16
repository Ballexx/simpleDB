const dbCommands = require('./dbCommands')

module.exports.read = function(databasename){return dbCommands.readCommand(databasename)}
module.exports.write = function(databasename, tableName, items){return dbCommands.writeCommand(databasename, tableName, items)}