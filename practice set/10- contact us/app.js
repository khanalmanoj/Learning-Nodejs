const express = require('express');

const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter')

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);


const PORT = 3002;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});