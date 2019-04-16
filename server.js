import express from 'express';
import path from 'path';
const app = express();

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
app.listen(3000, () => {
    console.log('http://localhost:3000/')
})