var fs = require('fs');


fs.writeFile('mynewfile33.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
