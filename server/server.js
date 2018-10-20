const express = require("express");
const bodyParser =  require("body-parser");
const morgan =  require("morgan");

const routes =  require('./routes/index');

const app =  express();

const port  = process.env.PORT || 9000 


const{errors} = require("celebrate");


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1',routes);
app.use(errors());

app.get('/', (req,res) => {
    res.send("Everthing Works! :)");
});


app.listen(port,e =>console.log(`works in port ${port}`));

