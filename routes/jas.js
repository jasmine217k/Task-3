const express=require('express');
const fs=require('fs');
const { db } = require('../model/jass');
const router=express.Router();
const jas=require('../model/jass');

router.get('/',async(req,res)=>{
try{
    const gig=await jas.find()
    res.json(gig)
}catch(err)
{
    res.send('Error'+err);
}
})

router.get('/:username',async(req,res)=>{
    try{
        const user=req.params.username;
        const gig=await jas.findOne({username:user});
        
        res.json(gig);
    }catch(err)
    {
        res.send('Error..'+err);
    }
    })

router.post('/',async(req,res)=>{
    const gig=new jas({
        username:req.body.username,
        password:req.body.password,
        name:req.body.name,
        phonenumber:req.body.phonenumber
    })
    try{
const c1=await gig.save()
res.json(c1)
    }catch(err){
res.send('Error');
    }
})

router.patch('/:username',async(req,res)=>{
    try{
        const user=req.params.username;
        const gig=await jas.findOne({username:user});
        console.log(gig);
             if(req.body.password)
             gig.password=req.body.password;
             if(req.body.name)
             gig.name=req.body.name;
             if(req.body.phonenumber)
             gig.phonenumber=req.body.phonenumber;
        
        const c1=await gig.save();
        res.json(c1);
        
    }catch(err){
        res.send('Error');
    }
})

router.delete('/:username',async(req,res)=>{
    try{
        
        const user=req.params.username;
       const gig=await jas.findOneAndDelete({username:user});
        res.send("User has been deleted successfully");
    }catch(err)
    {
        res.send("error");
    }
})


module.exports=router;

