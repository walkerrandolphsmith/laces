const express = require('express');
const toCamelCase = require('./../packages/toCamelCase/dist');

const app = express();

app.use(express.static('./../packages'));

app.get('/', (req, res) => {
    res.send(`<html>
        <head></head>
        <body>
        <span id="x">${toCamelCase('on server')}</span>
        <span id="y"></span>
        <script src="http://localhost:3000/toCamelCase/dist/index.js"></script>
        <script src="http://localhost:3000/laces/dist/index.js"></script>
        <script>
        var fn = function() {
            document.getElementById('y').innerHTML = toCamelCase('on client');
            console.log(laces);
        };
        document.addEventListener('DOMContentLoaded', fn, false);
        </script>
        </body>
    </html>`);
});

app.listen(3000, (err) => {
    err ? console.error(err) : console.log('Running on http://localhost:3000');
});
