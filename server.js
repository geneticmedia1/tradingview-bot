const express = require("express");

const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {

    // RESPOND IMMEDIATELY
    res.sendStatus(200);

    // LOG AFTER RESPONSE
    console.log("Webhook received:");
    console.log(req.body);
});

app.get("/", (req, res) => {
    res.send("Bot running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});