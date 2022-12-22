var express=require("express");
var app=express();

var bodyparser=require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.send("This is your server 7000");
})

app.listen(7000);
console.log("Server 7000 has started");