

///// CHALLENGE 2: RETURN THE DESCRIPTION OF THE MOVIE OUTLAW HANKY


import express from "express";
import { db } from "./db/db.js";

const app = express();

//// FIRST WE ADD THE MOVIE

app.get("/add", async (req,res)=>{
    try {
        db.execute(`INSERT INTO films(film_name,film_description,year,rating) VALUES(?,?,?,?)`, ['Outlaw Hanky', 'The description of Outlaw Hanky', 2000, 'PG-17'])
        res.status(201).json("MOVIE ADDED")
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong!"
        })
    }
})

app.get("/", async (req,res)=>{
    const [movie] = await db.execute(`SELECT film_description FROM films WHERE film_name = 'Outlaw Hanky'`);
    console.log(movie);
    if (movie.length === 0) {
        res.send(
        "Film not found"
    )
    }else{
        res.send(
            `<h1>HERE IS THE EMAIL</h1>
            <ol>
            ${movie.map(movie => `<li> Description: ${movie.film_description}</li>`
            ).join("")}</ol>`
        )
    }
})

app.listen(3000, ()=>{
    console.log("server is running");
});