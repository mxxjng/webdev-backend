const express = require('express');

const PORT = 5000;
const app = express();

app.use('/static-fileserver', express.static(__dirname + '/public'));

app.listen(PORT);
console.log(`app is listening on port: ${PORT}`);
