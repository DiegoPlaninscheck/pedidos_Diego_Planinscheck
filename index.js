const express = require('express');
const app = express();
const port = 8080;
const router = require("./router");

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });