const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
    let filePath = "";

    switch (req.url) {
        case "/":
            filePath = "index.html";
            break;
        case "/about":
            filePath = "about.html";
            break;
        case "/contact-me":
            filePath = "contact-me.html";
            break;
        default:
            filePath = "404.html";
            break;
    }

    const fullPath = path.join(__dirname, filePath);

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<h1> 500 - Server Error </h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
