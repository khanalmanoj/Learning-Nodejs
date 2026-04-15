const http = require('http');

const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log('Came in first middleware',req.url,req.method);
    next();
});

app.use("/submit-details", (req, res, next) => {
    console.log('Came in second middleware',req.url,req.method);
    res.send('<p> Hello from Express </p>');
});

const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});