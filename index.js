const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.json());

const cors = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
};

let _PORT = 4000;

app.get('/',(req,res)=>{
    cors(req,res);
    res.send('Heroku Rest API !');
});

app.post('/',(req,res)=>{
    cors(req,res);
    res.send(req.body);
    console.log(req.body);
});

app.listen(process.env.PORT || _PORT);

console.log('Server running at localhost:'+_PORT);
