import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedURL.pathname;
    const method = req.method;
    let file = "./404.html";
    let statusCode = 404;

    if (path === "/" && method === "GET") {
        file = "./index.html";
        statusCode = 200;
    } else if (path === "/about" && method === "GET") {
        file = "./about.html";
        statusCode = 200;
    } else if (path === "/contact-me" && method === "GET") {
        file = "./contact-me.html";
        statusCode = 200;
    } else {
        file = "./404.html";
        statusCode = 404;
    }

    try {
        const htmlContent = await fs.readFile(file, "utf8");
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.end(htmlContent);
    } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Sorry, something went wrong on the server");
    }
    return;
});

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
