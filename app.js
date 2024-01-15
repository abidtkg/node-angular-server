const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('**', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3300;
app.listen(port,  () => console.log(`Running Port ${port}`));
