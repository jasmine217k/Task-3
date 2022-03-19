const mongoose=require('mongoose');

const jasschema= new mongoose.Schema({
    username:
    {
        type:String,
        required:true
    },
     password:
    {
        type:String,
        required:true
    },
    name:{
type:String,
required:true

    },
    phonenumber:{
        type:String,
        required:true
    }
    
    

})
module.exports=mongoose.model('jass',jasschema);