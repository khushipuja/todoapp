const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const Item=mongoose.model('Item',itemSchema);
module.exports=Item;