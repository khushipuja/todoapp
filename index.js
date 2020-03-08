const express=require("express");
const path=require('path');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const Item=require('./models/Item');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var arr=["Personal","Work","School","Cleaning"," Other"];
var col=["#fe8761","#d4a5a5","#f9ed69","#30e3ca","#ffc8c8"];
app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("server is up and running");
});

app.get("/",function(req,res){

    Item.find({},function(err,Items){
if(err)
{
    console.log("error in fetching contacts from database");
    return;
}
return res.render("home1",{
    items:Items,
    arr:arr,
    col:col
});

});

});
app.post("/create-item",function(req,res){
    

    Item.create({
        name:req.body.name,
        date:req.body.date,
        category:req.body.category
    },function(err,newItems){
        if(err)
        {
            console.log("error in creating item");
            return;
        }
        return res.redirect('back');
    });


});
app.get("/delete-task",function(req,res){

    var id = req.query;
console.log(id);
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Item.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back');


});