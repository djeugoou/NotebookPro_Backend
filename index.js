import express from "express";
import authRoute from "./routes/authRoute.js";

const app=express()
const port=5000

app.get('/',(req,res) => {
    res.send("Hello World")
});

app.use("/api/auth",authRoute);

app.listen(port,()=> {
    console.log(`"Exmaple app listen on port ${port}"`)

})