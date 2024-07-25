const express =require("express");
const connectDb = require('./config/dbConnection');
connectDb();
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/contacts", require("./routes/contactRoute"));
console.log(process.env.CONNECTION_STRING);
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});