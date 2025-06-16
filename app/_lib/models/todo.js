const { default: mongoose } = require("mongoose");
const { unique } = require("next/dist/build/utils");

const todoSchema= mongoose.Schema({
    title:{
    type:String,
    require:true,
    unique:true
    },
    status:{
        type:String,
        default:"todo",
        enum:["todo","in progress","completed"]
    },
});

export const todoModel= mongoose.models.Todo || mongoose.model('Todo',todoSchema)