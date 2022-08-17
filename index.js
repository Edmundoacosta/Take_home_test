const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const api = require('./routes/api');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', api);

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});