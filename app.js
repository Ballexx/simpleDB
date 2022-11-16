const simpleDB = require("./components/simpleDB")

//simpleDB.read('database.db')
//simpleDB.write('database.db', "dsa", [JSON.stringify({Name:"jens",Age:"12"})])


simpleDB.deleteTable("database.db", "cool")