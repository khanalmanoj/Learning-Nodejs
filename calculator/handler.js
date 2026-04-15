const {sumRequestHandler} = require('./sum');
const requesthandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Welcome to the Calculator App</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
            </html>
        `);
        return res.end();
    } else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Here is the Calculator App</h1>
                <form action="/calculate-result" method="POST">
                <input type="text" id="num1" placeholder="First Number" name="first">
                <input type="text" id="num2" placeholder="Second Number" name="second">
                <input type="submit" value="sum">
                </form>
            </body>
            </html>
        `);
        return res.end();
    } else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
       return sumRequestHandler(req, res);
    }
}

exports.requesthandler = requesthandler;