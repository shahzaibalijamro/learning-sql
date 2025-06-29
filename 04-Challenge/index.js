// ///// CHALLENGE 1: HOW MANY PAYMENTS ARE GREATER THAN 5.00$?


// import express from "express";
// import { db } from "./db/db.js";

// const app = express();

// app.get("/", async (req,res)=>{
//     const [customers] = await db.execute(`SELECT COUNT(*) FROM payments WHERE amount > 5`);
//     console.log(customers);
//         res.send(
//             `<h1>HERE IS THE COUNT OF PAYMENTS THAT ARE > 5$</h1>
//             COUNT = ${customers[0]['COUNT(*)']}`
//         )
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
//         res.send(
//             `<h1>HERE IS THE COUNT OF FILM NAMES THAT START WITH THE LETTER P</h1>
//             COUNT = ${customers[0]['COUNT(*)']}`
//         )
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
//         res.send(
//             `<h1>HERE IS THE COUNT OF HOW MANY UNIQUE DISTRICTS ARE OUR CUSTOMERS FROM</h1>
//             COUNT = ${customers[0]['COUNT(DISTINCT(district))']}`
//         )
// })

// app.listen(3000, ()=>{
//     console.log("server is running");
// });




// ///// CHALLENGE 4: HOW MANY FILMS HAVE A RATING OF R AND A REPLACEMENT COST BW 5 AND 15?


// import express from "express";
// import { db } from "./db/db.js";

// const app = express();

// app.get("/", async (req, res) => {
//     const [films] = await db.execute(`SELECT COUNT(*) FROM FILMS WHERE rating = 'R' AND replacement_cost BETWEEN 5 AND 15`);
//     res.send(
//         `<h1>HERE IS THE COUNT OF HOW MANY FILMS HAVE A RATING OF R AND A REPLACEMENT COST BW 5 AND 15</h1>
//             COUNT = ${films[0]['COUNT(*)']}`
//     )
// })

// app.listen(3000, () => {
//     console.log("server is running");
// });


// ///// CHALLENGE 5: HOW MANY FILMS HAVE THE WORD Truman somewhere in the title?


import express from "express";
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req,res)=>{
    const [films] = await db.execute(`SELECT COUNT(*) as count FROM FILMS WHERE title LIKE '%Truman%'`);
    console.log(films);
        res.send(
            `<h1>HERE IS THE COUNT OF HOW MANY FILMS HAVE THE WORD Truman somewhere in the title</h1>
            COUNT = ${films[0].count}`
        )
})

app.listen(3000, ()=>{
    console.log("server is running");
});