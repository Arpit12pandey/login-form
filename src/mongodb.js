const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/logindata",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Hurray!Connection successful")
}).catch((err)=>{
    console.log(err);
});
const loginSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }


})
const collection=mongoose.model('collection1',loginSchema);
module.exports=collection;