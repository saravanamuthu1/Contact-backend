const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async() =>{
    try{
        const db = process.env.CONNECTION_STRING;
        console.log(db);
        const connect = await mongoose.connect(db);
        console.log(
            "Database connected",
            connect.connection.host,
            connect.connection.name
        );

    }
    catch(err){ 
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;