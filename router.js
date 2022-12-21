var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();

var studschema=new schema({
    name:String,
    std:Number,
    city:String
});

var stud=mongoose.model("student",studschema,"student");

router.get("/",function(req,resp){
    stud.find().exec(function(err,result){
        if(err){
            resp.status(500).send("Error Occured");
        }else{
            console.log(result);
            resp.send(result);
        }
    })

});

router.get("/student/:std",function(req,resp){
    stud.find({std:req.params.std}).exec(function(err,result){
        if(err){
            resp.status(500).send("Nodata found");
        }else{
            resp.send(result);
        }
    })
})

router.patch("/student/:std",function(req,resp){
    stud.findOne({std:req.params.std},function(err,doc){
        if(err){
            resp.status(500).send("errpr occured");
        }else{
            doc.name=req.body.name;
            doc.std=req.body.std;
            doc.city=req.body.city;

            doc.save(function(err,data){
                if(err){
                    console.log("error");
                }else{
                    console.log("updated successfully");
                    console.log(data);
                }
            })
        }
    })
})

router.delete("/student/:std",function(req,resp){
    stud.remove({std:req.params.std},function(err){
        if(err){
            resp.status(500).send("error");
        }else{
            resp.send("Deleted Successfully");
        }
    })
})

router.post("/student",function(req,res){

var studob=new stud({name:req.body.name,   
    std:req.body.std,
    city:req.body.city

    });

    studob.save(function(err,data){
        if(err){
            res.send("Failed");
        }
        else{
            console.log("data added");
            res.send(data);
        }
    })

});

module.exports=router;