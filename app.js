require('dotenv').config({ path: __dirname +`/.env` });
const scrapper = require('./scrapper');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 8001;
const cors = require("cors");
//
app.use(cors());
app.use(bodyParser.json({ limit: "1000mb" }));

app.use(express.static(path.join(__dirname, "/assets/")));
app.use(express.static(path.join(__dirname, "/")));

process.on("uncaughtException", function (err) {
    console.error(new Date().toUTCString() + " uncaughtException:", err.message);
    console.error(err.stack);
});

//Route setup
app.get("/", (req, res) => {
    res.send("<h3>Amazon Express Puppeteer</h3><code>version 1.0</code>");
    //scrapper(req.body.amazon_buyer_account)
});
app.post("/order-process", (req, res) => {
    //res.send("root route");
    //scrapper(req.body.amazon_buyer_account)
    if(req.body.token == 'c7cd413e3b646c5e73729fad31732a7f78b613472447cfc15fc22f0cf86d05f4'){
        scrapper(req.body.amazon_buyer_account)
        res.json({ success: true })
    }
    res.json({success:false})
});

app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
});
