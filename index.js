const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.json());

const cors = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
};


let data = '';
let apiTest;

async function Lire(){
	data = '';
	// Create a readable stream
	var readerStream = fs.createReadStream('mbusrs.json');
	// Set the encoding to be utf8.
	readerStream.setEncoding('UTF8');
	// Handle stream events --> data, end, and error
	readerStream.on('data', function(chunk) {
		data += chunk;
	});
	readerStream.on('end',function(){
		let the_data = JSON.parse(data);
		for (var i = 0; i < the_data.users.length; i++) {
			const reponse = the_data.users[i];
			apiTest = app.get(`/api/test/${i}`, (req, res) => {
				cors(req, res);
				res.send(reponse);
			});
		}
		console.log(the_data);
	});
	readerStream.on('error', function(err){
		console.log(err.stack);
	});
}

let _PORT = 4000;

app.get('/',(req,res)=>{
    cors(req,res);
    res.send(data);
});

app.post('/',(req,res)=>{
    cors(req,res);
    res.send(req.body);
    console.log(req.body);
});

app.listen(process.env.PORT || _PORT);

console.log('Server running at localhost:'+_PORT);
