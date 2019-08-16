const express = require("express");
const routes = express.Router();
const BlocosServices = require("../services/BlocosServices");


routes.post("/register", async (req, res) => {
    let body = req.body;
    let newBloco = await BlocosServices.save(body.idCondominium, body.NumberOfUnits, body.NumberOfGarages, body.NumberOfHobbyBox);

    res.send(newBloco);
})

module.exports= routes;