const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
    const { name, email, service, message } = req.body;

    const sql = `
        INSERT INTO inquiries (name, email, service, message)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, service, message], (err) => {
        if (err) {
            res.status(500).json({ message: "Database error" });
        } else {
            res.json({ message: "Proposal submitted successfully!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
