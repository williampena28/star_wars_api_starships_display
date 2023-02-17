const express = require('express');
const path = require('path');
const logger = require('morgan');
const axios = require('axios');
// cross origin access 
const cors = require('cors');
// require('dotenv').config();

const app = express();

// access
app.use(cors({
    origin: "*"
}));

// logs the different requests to our server
app.use(logger('dev'))

//parse stringified objects (JSON)
app.use(express.json())

// server build folder
app.use(express.static(path.join(__dirname, 'build')));

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.get('/', (req, res) =>
{
    console.log("Home route");
})

app.get('/services/sw-api', async (req, res) =>
{
    // call API
    let apiRes = await axios("https://swapi.dev/api/starships")
    let shipData = apiRes.data;
    console.log(shipData);
    res.json(shipData);
})

//Catch-all route
app.get('/*', (req, res) =>
{
    res.sendFile(path.join(__dirnam, 'build', 'index.html'));
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});