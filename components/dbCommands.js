const fs = require("fs");
const read = require('./dbReader')
const write = require('./dbWriter')
const remove = require('./dbDelete')

module.exports.readCommand = function(databaseName){
    
    let data = fs.readFileSync(databaseName);
    data = read.readDB(data.toString());
    return read.readTable(data)

}

module.exports.writeCommand = function(databaseName, tableName, items){ 
    fs.appendFile(databaseName, write.writeDB(tableName, items), (err) => {
        if (err) throw err;
        console.log("Items have been appended to database");
        
    });
}

module.exports.deleteTable = function(databaseName, tableName){
    return remove.deleteTable(databaseName,tableName)
}