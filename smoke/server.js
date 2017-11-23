const express = require('express');
const toCamelCase = require('./../dist/npm/toCamelCase.js');

const app = express();

app.use(express.static('./../dist'));

app.get('/', (req, res) => {
    res.send(`<html>
        <head></head>
        <body>
        <span id="onServer">${toCamelCase('on server')}</span>
        <span id="onClient"></span>
        <span id="api"></span>
        <script src="http://localhost:3000/browser/toCamelCase.js"></script>
        <script src="http://localhost:3000/browser/laces.js"></script>
        <script>
        var fn = function() {
            document.getElementById('onClient').innerHTML = toCamelCase('on client');
            document.getElementById('api').innerHTML = JSON.stringify(Object.keys(laces), null, 2);
        };
        document.addEventListener('DOMContentLoaded', fn, false);
        </script>
        </body>
    </html>`);
});

app.listen(3000, (err) => {
    err ? console.error(err) : console.log('Running on http://localhost:3000');
});
