const express = require('express');
const app = express();

let _PORT = 4000;

app.get('/',(req,res)=>{
    res.send('Le rest API fonctionne correctement !');
});

app.listen(process.env.PORT || _PORT);

console.log('Server running at localhost:'+_PORT);
