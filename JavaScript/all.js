var fs   = require('fs'),
    path = require('path');

fs.readdirSync(path.resolve(__dirname)).filter(function(file) {
	if (fs.statSync(file).isDirectory()) {
		require(path.resolve(__dirname, file, 'test.js'));
	}
});