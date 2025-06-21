import express from "express"
import { db } from "./db/db.js";

const app = express();

app.get("/", async (req, res) => {
    const [films] = await db.execute(`SELECT * FROM films`);
    console.log(films);
    if (films.length === 0) {
        res.send(
            "No film found"
        )
    } else {
        res.send(
            `<h1>HERE ARE THE FILMS</h1>
            <ol>
            ${films.map(film => `<li> film name: ${film.film_name}</li><li> year: ${film.year}</li><li> rating : ${film.rating}</li>`
            ).join("")}</ol>`
        )
    }
})

app.get("/count", async (req, res) => {
    const [films] = await db.execute(`SELECT COUNT(*) FROM films`);
    console.log(films);
    res.send(
        `<h1>HERE is THE FILMS count</h1>
        ${films[0]['COUNT(*)']}`
    )
})

app.get("/distinct-count", async (req, res) => {
    const [films] = await db.execute(`SELECT COUNT(DISTINCT rating) FROM films`);
    console.log(films);
    res.send(
        `<h1>HERE is THE FILMS count</h1>
        ${films[0]['COUNT(DISTINCT rating)']}`
    )
})

app.listen(3000, () => {
    console.log("server is running");
});