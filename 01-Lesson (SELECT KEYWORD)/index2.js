import express from "express"
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req,res)=>{
    const [films] = await db.execute(`SELECT * FROM films`);
    console.log(films);
    if (films.length === 0) {
        res.send(
        "No film found"
    )
    }else{
        res.send(
            `<h1>HERE ARE THE FILMS</h1>
            <ol>
            ${films.map(film => `<li> film name: ${film.film_name}</li><li> year: ${film.year}</li><li> rating : ${film.rating}</li>`
            ).join("")}</ol>`
        )
    }
})

app.get("/get-distinct-ratings", async (req,res)=>{
    const [ratings] = await db.execute(`SELECT DISTINCT rating FROM films`);
    console.log(ratings);
    if (ratings.length === 0) {
        res.send(
        "No film found"
    )
    }else{
        res.send(
            `<h1>HERE ARE THE DISTINCT RATINGS</h1>
            <ol>
            ${ratings.map(ratings => `<li>${ratings.rating}</li>`
            ).join("")}</ol>`
        )
    }
})

app.get("/add-film", async (req,res)=>{
    const film = await db.execute(`INSERT INTO films (film_name,year,rating) VALUES (?,?,?)`, ['The Godfather', 1972, 'PG-17']);
    console.log(film);
    res.send(
        "film ADDED"
    )
})

app.get("/add-table", async (req,res)=>{
    const films = await db.execute(`CREATE TABLE films (id INT AUTO_INCREMENT PRIMARY KEY, film_name VARCHAR(255) NOT NULL, year INT NOT NULL, rating VARCHAR(255) NOT NULL)`);
    console.log(films);
    res.send(
        "films table ADDED"
    )
})

app.listen(3000, ()=>{
    console.log("server is running");
});