import User from "../models/user.model";

// this block is to fetch all the user from the dataBase 

export const getUsers = async (req , res, next) =>{
    try {
        const users = await User.find() // this mongoDB method displays all the users in your DB
        
        res.send(200).json({success:true, data: users})
    } catch (error) {
        next(error)
    }
}

export const getuser = async (req,res,next) => {

    try {
        
        
    } catch (error) {
        
    }

}