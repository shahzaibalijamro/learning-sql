// ///// CHALLENGE 1: HOW MANY PAYMENTS ARE GREATER THAN 5.00$?


// import express from "express";
// import { db } from "./db/db.js";

// const app = express();

// app.get("/", async (req,res)=>{
//     const [customers] = await db.execute(`SELECT COUNT(*) FROM payments WHERE amount > 5`);
//     console.log(customers);
//     if (customers.length === 0) {
//         res.send(
//         "No customer found"
//     )
//     }else{
//         res.send(
//             `<h1>HERE IS THE COUNT OF PAYMENTS THAT ARE > 5$</h1>
//             COUNT = ${customers[0]['COUNT(*)']}`
//         )
//     }
// })

// app.listen(3000, ()=>{
//     console.log("server is running");
// });


// ///// CHALLENGE 2: HOW MANY FILM NAMES THAT START WITH THE LETTER P?


// import express from "express";
// import { db } from "./db/db.js";

// const app = express();

// app.get("/", async (req,res)=>{
//     const [customers] = await db.execute(`SELECT COUNT(*) FROM films WHERE film_name LIKE 'P%'`);
//     console.log(customers);
//     if (customers.length === 0) {
//         res.send(
//         "No customer found"
//     )
//     }else{
//         res.send(
//             `<h1>HERE IS THE COUNT OF FILM NAMES THAT START WITH THE LETTER P</h1>
//             COUNT = ${customers[0]['COUNT(*)']}`
//         )
//     }
// })

// app.listen(3000, ()=>{
//     console.log("server is running");
// });


// ///// CHALLENGE 3: HOW MANY UNIQUE DISTRICTS ARE OUR CUSTOMERS FROM?


// import express from "express";
// import { db } from "./db/db.js";

// const app = express();

// app.get("/", async (req,res)=>{
//     const [customers] = await db.execute(`SELECT COUNT(DISTINCT(district)) FROM customers`);
//     console.log(customers);
//     if (customers.length === 0) {
//         res.send(
//         "No customer found"
//     )
//     }else{
//         res.send(
//             `<h1>HERE IS THE COUNT OF HOW MANY UNIQUE DISTRICTS ARE OUR CUSTOMERS FROM</h1>
//             COUNT = ${customers[0]['COUNT(DISTINCT(district))']}`
//         )
//     }
// })

// app.listen(3000, ()=>{
//     console.log("server is running");
// });