const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use("/", (req, res, next) => {
    console.log('First Dummy Middleware',req.url,req.method);
    next();
});

app.use("/", (req, res, next) => {
    console.log('Second Dummy Middleware',req.url,req.method);
    next();
});

app.get("/",(req, res, next) => {
    console.log("Handling / for GET",req.url, req.method);
    res.send('<h1>Welcome</h1>');
});


app.get("/contact-us",(req, res, next) => {
    console.log("Handling /contact-us for GET",req.url, req.method);
    res.send(`
        <h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="submit"/>
        </form>
        `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req, res, next) => {
    console.log("Handling /contact-us for POST",req.url, req.method, req.body);
    res.send('<h1>We will contact you shortly</h1>');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});