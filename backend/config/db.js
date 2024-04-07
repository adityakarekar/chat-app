const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://adityakarekar0311:aditya%400311@cluster0.ucsgeu4.mongodb.net/");
        console.log("MongoDB Connected Successfully: " + conn.connection.host);
    }

    catch(error){
        console.log(error.message);
        process.exit();
    }
}

module.exports=connectDb;