import mongoose,{Schema} from "mongoose";

const contactModel = new Schema({
    name:{
        type:String,
        required:true
    },
    organizationName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

export default mongoose.model("Contact",contactModel)