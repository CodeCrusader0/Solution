var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
var routers=require("./router");

var mongoose=require("mongoose");

mongoose.promise=global.promise;

const url='mongodb://127.0.0.1:27017/misproject'

mongoose.connect(url,{
    connectTimeoutMS:2000

},function(err,res){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connection Done Successfully");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req,resp,next){
    resp.setHeader('Access-control-Allow-origin','*');
    resp.setHeader('Access-control-Allow-Methods','GET','POST','PUT','DELETE');
    resp.setHeader('Access-control-Allow-Credentials',true);
    resp.setHeader('Access-control-Allow-Headers','Content-Type');
    next();
});

app.use(express.static(path.join(__dirname,"public")));
app.use("/",routers);

app.listen(3250);
console.log("Connection is Done")

module.exports=app;