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
app.get("/convertCurrency", async (req, res) => {
    const { date,
        amountInSourceCurrency,
        targetCurrency,
        amountInTargetCurrency, } = req.query;
    try {

        const dataUrl = 'https://openexchangerates.org/api/historical/${date}.json?app_id=0b4c0dbe8b3b4e8696ca2c9112a2100f';

        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.data.rates;

        //rates
        const targetRates = rates(targetCurrency);
        const sourceRates = rates(sourceCurrency);

        //final target amount
        const targetAmount = (targetRates / sourceRates) * amountInSourceCurrency;

        return res.json(targetAmount);

    } catch (err) {
        console.error(err);

    }
})

//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
});



