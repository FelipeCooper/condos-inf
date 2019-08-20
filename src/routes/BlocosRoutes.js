const express = require("express");
const routes = express.Router();
const BlocosServices = require("../services/BlocosServices");


routes.post("/register", async (req, res) => {
    let body = req.body;
    let result = await BlocosServices.save(body.idCondominium, body.NumberOfUnits, body.NumberOfGarages, body.NumberOfHobbyBox);

    res.send(result);
})
routes.get("/show", async (req, res) => {
    let result = await BlocosServices.show(req.body.idCondominium);
    res.send(result);
})
routes.put("/update", async (req, res) => {
    let body = req.body;
    let result = await BlocosServices.update(body.NumberOfUnits, body.NumberOfGarages, body.NumberOfHobbyBox, body.id);
    res.send(result);
})
routes.delete("delete/:id", async (req, res) => {
    let result = await BlocosServices.delete(req.params.id);
    res.json({delete: result});
})

module.exports = routes;



