var fs = require('fs');

exports.readJsonFileSync = function (filepath, encoding) {
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }

    var file = fs.readFileSync(filepath, encoding);

    return JSON.parse(file);
};

exports.getJsonData = function (file) {
    var filepath = __dirname + '/' + file;
    return this.readJsonFileSync(filepath);
};