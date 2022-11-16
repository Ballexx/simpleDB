module.exports.readDB = function(data) {
  let stream = false;
  let DIVIDED_DB = [];
  let READ_DATA = [];

  try {
    for (i = 0; i < data.length; i++) {
      if (data[i] == ">") {
        DIVIDED_DB.push(READ_DATA.join(""));
        READ_DATA = [];
        stream = false;
      }

      if (stream && data[i] != "\r" && data[i] != "\n") {
        READ_DATA.push(data[i]);
      }

      if (data[i] == "<") stream = true;
    }

    return DIVIDED_DB;
  } catch (e) {
    console.log(e);
  }
}

module.exports.readTable = function (data) {
  let streamTitle,
    streamItems = false;
  let title = [],
    items = [],
    splitItems = [],
    JOINED_DATA = [],
    FINAL_DATA = [];

  try {
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        if (data[i][j] == "?") {
          streamTitle = false;
        }

        if (streamTitle) {
          title.push(data[i][j]);
        }

        if (data[i][j] == "!") streamTitle = true;

        if (data[i][j] == "-") {
          items = [];
          streamItems = false;
        }

        if (streamItems) {
          items.push(data[i][j]);
        }

        if (data[i][j] == ":") streamItems = true;
      }

      JOINED_DATA.push(
        JSON.stringify({ Table: title.join(""), Items: splitItems })
      );
        
      FINAL_DATA.push(JOINED_DATA);

      (splitItems = []), (title = []), (JOINED_DATA = []);
    }

    return FINAL_DATA;
  } catch (e) {
    console.log(e);
  }
}
