module.exports.writeDB = function (tableName, items) {
  try{
    
    if(tableName == '' || tableName == null) throw "Can't insert empty data"
    
    tableName = `!${tableName}?`;

    let itemList = [];

    for (i = 0; i < items.length; i++) {
        if(items[i] == '' || items[i] == null) throw "Can't insert empty data"
        
        itemList.push(`:${items[i]}-`);
    }

    let table = `<${tableName}${itemList.join("")}>`;

    return table;
  }
  catch(e){
    console.log(e)
  }
    
};
