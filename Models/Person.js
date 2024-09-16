import mongoose from "mongoose";
import bcrypt from "bcrypt";    
const PersonSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        enum : ['chef', 'manager', 'waiter'],
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true 
    },
    salary : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

PersonSchema.pre('save', async (next)=>{

    // if(!this.isModified('password')) return next()

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next()
    }catch(error){
        console.log(error);
        
    }
})

PersonSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password)
}

const Person = mongoose.model('Person', PersonSchema);

export default Person;