import mysql2 from "mysql2"

const db = mysql2.createPool({
    host: 'localhost',
    user: "root",
    password: "00000000",
    database: "practice",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

export {db};