const express=require("express");
const app=express();
const port=8000;
const cors=require("cors");
const db=require('./config/mongoose');
const bodyParser=require('body-parser');


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

//use express router
app.use('/',require('./routes'))







app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});