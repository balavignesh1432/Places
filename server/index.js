require('dotenv').config();
const ConnectDB=require('./config/db');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const routes=require('./route/routes');

const app= express();

// ConnectDB();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/url",routes);

app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server running on "+ port);
});