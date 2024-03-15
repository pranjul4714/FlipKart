import mongoose from "mongoose";



const connection = async (username,password) => {
   
    const URL = `mongodb+srv://${username}:${password}@abhimongo.o5iq8su.mongodb.net/EcomerceDB`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default connection;