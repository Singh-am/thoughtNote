const mongoose = require('mongoose');
const mongoURI =  "mongodb://localhost:27017/"

// const connectToMongo = async () =>{
// mongoose.connect(mongoURI,()=>{
//     console.log("connected to mongoDB successfully")
// })
// }

const connectToMongo = async () => {
    await mongoose.connect(mongoURI,{family: 4,});
    console.log("Connected to MongoDB Successfully");
  };
  
 // connectToMongo();

module.exports = connectToMongo;