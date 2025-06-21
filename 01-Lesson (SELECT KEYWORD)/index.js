import express from "express"
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req,res)=>{
    const [customers] = await db.execute(`SELECT * FROM customers`);
    console.log(customers);
    if (customers.length === 0) {
        res.send(
        "No customer found"
    )
    }else{
        res.send(
            `<h1>HERE ARE THE CUSTOMERS</h1>
            <ol>
            ${customers.map(customer => `<li> first name: ${customer.first_name}</li><li> last name: ${customer.last_name}</li><li> email : ${customer.email}</li>`
            ).join("")}</ol>`
        )
    }
})

app.get("/add-customer", async (req,res)=>{
    const customer = await db.execute(`INSERT INTO customers (first_name,last_name,email) VALUES (?,?,?)`, ['Shahzaib', 'Ali', 'shahzaibalijamro@gmail.com']);
    console.log(customer);
    res.send(
        "customer ADDED"
    )
})

app.get("/add-table", async (req,res)=>{
    const customers = await db.execute(`CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email TEXT NOT NULL)`);
    console.log(customers);
    res.send(
        "customers LOGGED"
    )
})

app.listen(3000, ()=>{
    console.log("server is running");
});