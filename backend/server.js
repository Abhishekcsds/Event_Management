const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
