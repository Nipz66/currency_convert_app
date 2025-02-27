const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//f and b data transfer middle wears
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=5f4f8d172c1e430c855e142156d001b2";



    return res.json(nameData);

    try {
        const nameResponce = await axios.get(nameURL);
        const nameData = nameResponce.data;
    } catch (err) {
        console.error(err);
    }
});

//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
});



