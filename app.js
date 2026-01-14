import express from "express";
import dotenv from 'dotenv';


const app = express();
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 3012

app.get('/',(req,res,next) => {
  
    res.send('Server is Running');

})

app.listen(PORT,() => {
    console.log(`Server is running on Port ${PORT}`)
})
