const fs = require("fs");
const read = require('./dbReader')
const write = require('./dbWriter')
const deleteItem = require('./dbDelete')

module.exports.readCommand = function(databasename){
    
    let data = fs.readFileSync(databasename);
    data = read.readDB(data.toString());
    return read.readTable(data)

}

module.exports.writeCommand = function(databasename, tableName, items){ 
    fs.appendFile(databasename, write.writeDB(tableName, items), (err) => {
        if (err) throw err;
        console.log("Items have been appended to database");
        
    });
}