const express = require("express");
const routes = express.Router();
const BlocosServices = require("../services/BlocosServices");


routes.post("/register", async (req, res) => {
    let body = req.body;
    let newBloco = await BlocosServices.save(body.idCondominium, body.NumberOfUnits, body.NumberOfGarages, body.NumberOfHobbyBox);

    res.send(newBloco);
})
routes.get("/show", async (req, res) => {
    let blocos = await BlocosServices.show(req.body.idCondominium);
    res.send(blocos);
})
routes.put("/update", async (req, res) => {
    let body = req.body;
    let blocoUpdate = await BlocosServices.update(body.NumberOfUnits, body.NumberOfGarages, body.NumberOfHobbyBox, body.id);
    res.send(blocoUpdate);
})

module.exports = routes;



