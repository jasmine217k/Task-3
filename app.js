const express=require('express');
const mongoose=require('mongoose');     
const app=express();
const url='mongodb://localhost/jasdbx';

mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection;

con.on('open',function(){
    console.log('connected...');
})
app.use(express.json());
const jasroutes=require('./routes/jas');
app.use('/jas',jasroutes);

app.listen(8000,function(){
    console.log('server started');
})