const express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var routes=require("./routes/router.js");
mongoose.promise=global.promise;
const url="mongodb://127.0.0.1:27017/mis";

mongoose.connect(url,{
    connectTimeoutMS:1000,
},function(err,result){
    if(err){
        console.log(err);
        console.log("Error Occured");
    }else{
        console.log(result);
        console.log("Connection done")
    }
});


//middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/",routes);

app.listen(3000);

console.log("server is running at 3000");
module.exports=app;
