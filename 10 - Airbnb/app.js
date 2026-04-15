//Exernal module
const express = require("express");
const path = require("path");

//Local Module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});