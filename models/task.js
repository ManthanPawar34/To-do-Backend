import mongoose from "mongoose";
// made schema


const schema = new mongoose.Schema({
    title : {
        type:String,
        require:true,
    },

    description: {
        type:String,
        require:true,
    },


    isCompleted:{
        type:Boolean,
        default:false,
    },

    user :{
        type :mongoose.Schema.Types.ObjectId,
        require:true,
        //(ref:reference) It will be collections refernece from mongo DB
        ref:"User",
    },

    creadtedAt:{
        type : Date,
        default : Date.now,
    }

});

// for make folder of user with scheme 
export const Task =  mongoose.model("Task",schema);