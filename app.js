const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('noda app.jspublic'))

// Ori Homepage
app.get('/home',  (request, response) => {
    console.log(__dirname)
    response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/series', (req, res) => {
    res.sendFile(`${__dirname}/views/series.html`)
})

app.get('/photogallery', (req, res) => {
    res.sendFile(`${__dirname}/views/photogallery.html`)
})

app.listen(port, () => {
    console.log(`My very first app is listening to port ${port}!`)
});

