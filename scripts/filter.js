#!/usr/bin/nodejs

var exec = require('child_process').exec;
var fs = require('fs');
var largeCities = [];

var promise = new Promise(function (resolve, reject) {
    fs.readFile('cities.json', function (err, data) {
        if (err) {
            throw err;
        console.log("error");
            
        } else {
            var json = JSON.parse(data);
            json.forEach(function (item, index) {
                if (item.inhabitants >= 50000) {
                    largeCities.push(item);
                }
            });
        }
        resolve();
    });

});
promise.then(function (result) {
    console.log(largeCities.length + " cities with >= 50000 inhabitants");
    fs.writeFile('largeCities.json', JSON.stringify(largeCities), 'utf8', function (err) {
        if (err){throw err;
        console.log("error");}
    });
}, function (err) {
    console.log(err);
});