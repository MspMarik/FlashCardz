const express = require("express");
const app = express();
const configRoutes = require("./routes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
configRoutes(app);

app.listen(5000, () => {
    console.log("We've now got a server!");
    let i = 3;
    console.log("Your routes will be running on http://localhost:5000");
});
