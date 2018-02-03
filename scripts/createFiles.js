#!/usr/bin/nodejs

var exec = require('child_process').exec;
var fs = require('fs');

var promise = new Promise(function (resolve, reject) {
    fs.mkdir("./output", function (e) {
        if (e) {
            console.log(e);
        }
        resolve();
    });
});
promise.then(function (result) {
    fs.readFile('largeCities.json', function (err, data) {
        if (err) {
            throw err;
            console.log("error");

        } else {
            var json = JSON.parse(data);
            json.forEach(function (item, index) {
                var content = 
                "---\n" +
                `title: ${item.name} \n` +
                `inhabitants: ${item.inhabitants} \n` +
                "---\n";
                fs.writeFile(`./output/${item.name}.md`, content, 'utf8', function (err) {
                    if (err) {
                        throw err;
                        console.log("error");
                    }
                });
            });
        }
        
    });
}, function (err) {
    console.log(err);
});