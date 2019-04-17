import express from 'express';
import path from 'path';
const app = express();

app.use('/public', express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3001, () => {
    console.log('http://localhost:3001/')
})