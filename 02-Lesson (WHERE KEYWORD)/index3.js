///// CHALLENGE 3: GET THE EMAIL OF THE CUSTOMER WHOSE ADDRESS IS '259 Ipoh Drive'


import express from "express";
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req,res)=>{
    const [customer] = await db.execute(`SELECT email FROM customers WHERE address = '259 Ipoh Drive'`);
    console.log(customer);
    if (customer.length === 0) {
        res.send(
        "No customer found"
    )
    }else{
        res.send(
            `<h1>HERE IS THE EMAIL</h1>
            <ol>
            ${customer.map(customer => `<li> EMAIL: ${customer.email}</li>`
            ).join("")}</ol>`
        )
    }
})

app.listen(3000, ()=>{
    console.log("server is running");
});