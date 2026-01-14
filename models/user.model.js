import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({ // Schema is basically the structure in which the data is going to be saved mongoDB
    name:{
        type: String,
        required: [true, 'User Name Is Required'], // required is a validator in mongoose
        trim : true, // used to cut spaces from both the ends of the string entry
        minLength: [2,'Length Should atleast be 2'],
        maxLength: [50,`Name can't exceed 50 words`]
    },
    email:{
        type: String,
        required :[true, 'Email is necessary'],
        trim: true,
        unique: true, // unique is not a validator it is a database index 
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],

    },
    password:{
        type : String,
        required: [true, `A Strong Password is Required`],
        minLength : 6

    }
},
{timestamps:true}
) // timestamps field autmatically adds createdAt and updatedAt fields to your schema in the DATE  format 


const User = mongoose.model('User',userSchema);

export default User;
