# Basic Informational Site

A lightweight web server built with pure Node.js and ES Modules. I created this project as part of The Odin Project's Node.js curriculum to understand core backend concepts, request-response lifecycles, and manual server-side routing without external frameworks.

The main objective was to handle incoming HTTP requests, read local HTML documents asynchronously, and serve the correct pages and HTTP status codes based on the requested URL pathname.

---

## Features

- **Pure Node.js Core**: Built entirely with Node's native `http` and `fs/promises` modules, without third-party frameworks like Express.
- **Modern ES Module Syntax**: Written using standard ESM `import` statements and modular JavaScript structure.
- **Clean Path Resolution**: Uses the WHATWG `URL` class to parse incoming request paths accurately and ignore query strings.
- **Non-Blocking File Delivery**: Reads and serves HTML files asynchronously with `fs/promises` to keep the server responsive.
- **Dedicated 404 and Error Handling**: Automatically serves a custom `404.html` page for undefined routes, and catches file read errors with a safe 500 fallback.

---

## What I Learned

Building this server from scratch helped me understand how backend frameworks operate under the hood before moving to Express.

Key takeaways from this project include:

- **The HTTP Request-Response Lifecycle**: I learned how to create a server using `http.createServer` and work directly with incoming `req` streams and outgoing `res` objects. I gained direct practice setting response headers (`Content-Type: text/html`) and closing connections properly with `res.end()`.
- **Accurate Routing with the WHATWG URL API**: I learned why parsing `req.url` with `new URL()` is more reliable than raw string comparisons. It cleanly separates the route pathname from domain headers and query parameters.
- **Asynchronous File Reading**: Working with `fs/promises` allowed me to use `async / await` and `try...catch` blocks to read static files from the disk. This prevented blocking the event loop while keeping the code flat and readable.
- **Code Refactoring and DRY Structure**: My initial implementation repeated the file-reading logic across multiple conditional blocks. I refactored the routing flow to set the targeted file path and status code first, reducing code duplication and centralising error handling into a single block.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)

### Installation and Usage

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```

2. Start the server:
   ```bash
   node index.js
   ```
   *(Or run with auto-restart using `node --watch index.js`)*

3. Open your browser and navigate to any of the supported endpoints:
   - `http://localhost:8080/` (Home page)
   - `http://localhost:8080/about` (About page)
   - `http://localhost:8080/contact-me` (Contact page)
   - Any other route displays the custom 404 page (for example: `http://localhost:8080/unknown`)

---

## Acknowledgements

- This project is based on the [Basic Informational Site assignment](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) from The Odin Project.
- Built using the official [Node.js Documentation](https://nodejs.org/).