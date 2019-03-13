const {resolve} = require('path');
const express = require('express');

const app = express();

app.use('/public', express.static(resolve(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(resolve('index.html')));

app.listen(3000);
