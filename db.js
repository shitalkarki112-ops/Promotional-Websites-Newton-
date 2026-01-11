const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sundersoft_db"
});

db.connect(err => {
    if (err) {
        console.error("Database error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = db;
