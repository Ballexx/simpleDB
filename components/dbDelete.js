const read = require('./dbReader')
const fs = require('fs')

module.exports.deleteTable = function(databaseName, tableName){
    let data = fs.readFileSync(databaseName);
    data = read.readDB(data.toString());
    data = read.readTable(data)

    for(i = 0; i < data.length; i++){
        let parsed = JSON.parse(data[i])
        
        if(parsed.Table == tableName){
            console.log(data[i])
        }

    }

}