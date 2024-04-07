const mongoose=require("mongoose");

const userModel=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},

    pic:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdefault&psig=AOvVaw0CV3nsBt5vAVZSlGgNghk3&ust=1712218644778000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJikzdPNpYUDFQAAAAAdAAAAABAE"
    }
    
},{
    timestamps:true
})

const User=mongoose.model("User",userModel);
module.exports=User;