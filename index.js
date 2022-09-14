// const {
// 	createPool
// } = require('mysql');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const postgres = require('postgres');

const sql = postgres('postgres://tester:GJoqPTwegZeTaUw14lZtb1epEGtRnaeg@dpg-ccf5scqrrk010ntvpumg-a.oregon-postgres.render.com/db_k0hf',{

});
const app = express();

// const sql = createPool({
// 	host: "fdb27.biz.nf",
// 	user: "3842556_rs",
// 	password: "1d2a3w4a5i",
// 	database: "3842556_rs"
// });

// const query = sql`CREATE TABLE if not exists plantes (
// 	'id' INT NOT NULL AUTO_INCREMENT,
// 	'commande' VARCHAR(100),
// 	'date_enregistrement' DATETIME,
// 	'id_entreprise' INT(11),
// 	'nom_entreprise' VARCHAR(70),
// 	PRIMARY KEY ('id')
// );`;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
	origin: '*',
	allowedHeaders: 'Content-Type'
}));

let data = {"nom":"Dawaï"};

let _PORT = 4000;

app.get('/',(req,res)=>{
	const s = sql`SELECT * FROM plantes`;
    res.send(s);
});

app.post('/',(req,res)=>{
	// sql.query("SELECT * FROM plantes", ((err, result, field) => {
	// 	if (err) {
	// 		return console.log(err);
	// 	}
	// 	return console.log(result);
	// }));
	const q = sql`SELECT * FROM plantes`;
    res.send(q);
    console.log(req.body);
});

app.listen(process.env.PORT || _PORT);

console.log('Server running at localhost:'+_PORT);
