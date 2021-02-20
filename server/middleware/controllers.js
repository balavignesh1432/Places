const Db = require('../model/models');

const getData = async (req,res)=>{
    try{
        const foundData = await Db.find();
        if(foundData !== null){
            console.log(found);
        }else{
            console.log("No Data found!");
        }
    }catch(err){
        console.log(err);
    }
};

const postData = async (req,res)=>{
    try{
        const postData = new Db(req.body);
        await postData.save((err)=>{
            if(!err){
                console.log("Save Successful!");
            }else{
                console.log("Save failed!");
            }
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = {getData,postData};