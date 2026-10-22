import http from "node:http";
import fs from "node:fs/promises";
import EventEmitter from "node:events";

const server = http.createServer(async (req, res) => {
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedURL.pathname;
    const method = req.method;

    if (path === "/" && method === "GET") {
        try {
            const htmlContent = await fs.readFile("./index.html", "utf8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlContent);
        } catch (error) {
            console.error(error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Sorry, something went wrong on the server");
        }
        return;
    }
    if (path === "/about" && method === "GET") {
        try {
            const htmlContent = await fs.readFile("./about.html", "utf8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlContent);
        } catch (error) {
            console.error(error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Sorry, something went wrong on the server");
        }
        return;
    }
    if (path === "/contact-me" && method === "GET") {
        try {
            const htmlContent = await fs.readFile("./contact-me.html", "utf8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlContent);
        } catch (error) {
            console.error(error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Sorry, something went wrong on the server");
        }
        return;
    }
    try {
        const htmlContent = await fs.readFile("./404.html", "utf8");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(htmlContent);
    } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Sorry, something went wrong on the server");
    }
});

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
