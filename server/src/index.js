const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//f and b data transfer middle wears
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=0b4c0dbe8b3b4e8696ca2c9112a2100f";





    try {
        const nameResponce = await axios.get(nameURL);
        const nameData = nameResponce.data;

        return res.json(nameData);

    } catch (err) {
        console.error(err);
    }
});

//get target currency


//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
});



