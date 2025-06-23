///// CHALLENGE 1: WHAT ARE THE ID'S OF THE FIRST 10 CUSTOMERS WHO CREATED A PAYMENT?


import express from "express";
import { db } from "./db/db.js";

const app = express();

//first create payments table

// app.get("/create-table", (req,res)=>{
//     try {
//         db.execute('CREATE TABLE payments(id INT AUTO_INCREMENT PRIMARY KEY,customer_id VARCHAR(255) NOT NULL, amount INT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)')
//         res.status(201).json({
//             message: "Table Created!"
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Something went wrong!"
//         })
//     }
// })

//add payment records in it

// app.get("/add", async (req,res)=>{
//     try {
//         for (let index = 0; index < 20; index++) {
//             console.log(`${index+1} record start`);
//             await db.execute('INSERT INTO payments(customer_id,amount) VALUES (?,?)', [`${index+1}`, index+1*10]);
//         }
//         res.status(201).json({
//             message: "Records added"
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Something went wrong!"
//         })
//     }
// })


//CHALLENGE 1: WHAT ARE THE ID'S OF THE FIRST 10 CUSTOMERS WHO CREATED A PAYMENT?
app.get("/", async (req,res)=>{
    const [customers] = await db.execute(`SELECT customer_id FROM payments WHERE amount > 0 ORDER BY created_at DESC LIMIT 10`);
    console.log(customers);
    if (customers.length === 0) {
        res.send(
        "No customer found"
    )
    }else{
        res.send(
            `<h1>HERE ARE THE ID'S OF THE FIRST 10 CUSTOMERS</h1>
            <ol>
            ${customers.map(customer => `<li> Email: ${customer.customer_id}</li>`
            ).join("")}</ol>`
        )
    }
})

app.listen(3000, ()=>{
    console.log("server is running");
});