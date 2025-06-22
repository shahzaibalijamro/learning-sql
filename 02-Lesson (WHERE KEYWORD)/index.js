///// CHALLENGE 1: WHAT IS THE EMAIL OF THE CUSTOMER WITH NAME NANCY THOMAS


import express from "express";
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req,res)=>{
    const [email] = await db.execute(`SELECT email FROM customers WHERE first_name = 'Nancy' AND last_name = 'Thomas'`);
    console.log(email);
    if (email.length === 0) {
        res.send(
        "No customer found"
    )
    }else{
        res.send(
            `<h1>HERE IS THE EMAIL</h1>
            <ol>
            ${email.map(email => `<li> Email: ${email.email}</li>`
            ).join("")}</ol>`
        )
    }
})

app.listen(3000, ()=>{
    console.log("server is running");
});