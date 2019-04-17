import express from 'express';
import path from 'path';
const app = express();

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.use(express.static('dist'));

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})