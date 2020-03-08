const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/item_list_db');

const db=mongoose.connection;
db.on('err',function(err){
    console.log("error in mongoose");
console.log(err.message);
});
db.once('open',function(){
    console.log("succesfully connected to the database");
});