const sumRequestHandler = (req, res) => {
    console.log('Handling sum request',req.url);
    const body = [];
    let result;
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyString);
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log('Result of sum:', result);
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator Result</title></head>
            <body>
                <h1>Here is the Calculator Result</h1>
                <p>The sum of ${bodyObj.first} and ${bodyObj.second} is: ${result}</p>
            </body>
            </html>
        `);
        return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;