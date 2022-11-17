const fs = require("fs");

module.exports.readDB = function (data) {
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

		let streamTitle,
			streamItems = false;
		let title = [],
			items = [],
			splitItems = [],
			JOINED_DATA = [],
			FINAL_DATA = [];

		try {
			for (i = 0; i < DIVIDED_DB.length; i++) {
				for (j = 0; j < DIVIDED_DB[i].length; j++) {
					if (DIVIDED_DB[i][j] == "?") {
						streamTitle = false;
					}

					if (streamTitle) {
						title.push(DIVIDED_DB[i][j]);
					}

					if (DIVIDED_DB[i][j] == "!") streamTitle = true;

					if (DIVIDED_DB[i][j] == "-") {
						splitItems.push(items.join(""));
						items = [];
						streamItems = false;
					}

					if (streamItems) {
						items.push(DIVIDED_DB[i][j]);
					}

					if (DIVIDED_DB[i][j] == ":") streamItems = true;
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
	} catch (e) {
		console.log(e);
	}
};

module.exports.readWhere = function (databaseName, tableName) {
	let data = fs.readFileSync(databaseName).toString();
	data = data.replace(/\s+/g, "");
	findIndex = data.indexOf(`!${tableName}?`);
  
	if (findIndex == -1) return console.log("Table does not exist");

	let table = [];

	for (i = findIndex - 1; i < data.length; i++) {
		table.push(data[i]);
		if (data[i] == ">") break;
	}
	return table.join("");
};
