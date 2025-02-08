require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact-me.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
