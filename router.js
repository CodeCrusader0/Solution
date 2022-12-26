var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var routers=express.Router();

var facty=new schema({
    id:Number,
    firstname:{type:String,trim:true,required:true},
    lastname:{type:String,trim:true,required:true},
    course:String,
    email:String,
    gender:String,
    experience:Number
});

var fac=mongoose.model('faculty',facty,'faculty');

    routers.get("/faculty",function(req,resp){
        fac.find().exec(function(err,data){
            if(err)
            {
                resp.status(500).send("Error Required")
            }
            else{
                resp.send(data);
            }
        })
    })

// routers.get("/create",function(req,resp){
//     resp.render('create',{title:'Add Student'});
// })


routers.post("/faculty",function(req,res){
    var newdata=new fac({id:req.body.id,firstname:req.body.firstname,lastname:req.body.lastname,course:req.body.course,email:req.body.email,gender:req.body.gender,experience:req.body.experience});
    console.log(newdata);
    newdata.save(function(err,data){
        if(err)
        {
            console.log("In if");
            console.log(data);
            res.send("Not inserted");
        }
        else{
            console.log("In else");
            console.log(data);
            res.send(data);
        }
    })

});

routers.get("/faculty/:id",function(req,res){
    fac.findOne({id:req.params.id}).exec(function(err,data){
        if(err)
        {
            console.log("in if");
            res.send("No data is edited");
        }
        else{
            console.log(data);
            res.send(data);
        }
    });
})

routers.put("/faculty/:id",function(req,res){
    console.log(req.body);
    fac.findOne({id:req.params.id},function(err,doc){
        console.log("In findOne");
        // console.log(doc);
        
        if(err)
        {
            res.send("Failed");
        }
        else{
            console.log("in else");
            doc.id=req.body.id,
            doc.firstname=req.body.firstname,
            doc.lastname=req.body.lastname,
            doc.course=req.body.course,
            doc.email=req.body.email,
            doc.gender=req.body.gender,
            doc.experience=req.body.experience
            console.log(doc);
            doc.save(function(data){
                    res.send(data);
                
            })
        }
    })
});

routers.delete("/faculty/:id",function(req,res){
    fac.remove({id:req.params.id},function(err,data){
        if(err)
        {
            res.send("Deletion failed");
        }
        else{
            res.send("Successfull");
        }
    })
});

    module.exports=routers;