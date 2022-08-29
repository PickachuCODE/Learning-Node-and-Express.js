const express = require("express")
const db = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()
// init port and express 😗
const app = express();
const port = process.env.PORT || 3000;
// routes🤔
const userRoutes = require('./routes/user.js')
const authRoutes = require("./routes/auth.js");


db.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connection valid");
    })
    .catch((err) => console.log(err));
    

app.use(express.json())
app.use("/", authRoutes);
app.use("/api/users", userRoutes);




app.listen(port, ()=>{console.log(`server running on ${port}`)})