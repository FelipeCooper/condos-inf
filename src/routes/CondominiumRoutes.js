//
const express = require('express');
const routes = express.Router();
const CondominiumService = require('../services/CondominiumService');

routes.get('/show', async function (req, res) {
    let condos = await CondominiumService.read();
    res.json(condos)
});

routes.get('/search/:id', async function (req, res) {
    let condominium = await CondominiumService.readID(req.params.id);
    res.json(condominium)
});

routes.put('/update', async function (req, res) {
    let body = req.body;
    let result = await CondominiumService.update(
        body.name,
        body.cnpj,
        body.numberCondominium,
        body.id);
    res.json(result)
});

routes.post('/register', async (req, res) => {
    let Condominium = req.body;
    console.log(Condominium)
    let result = await CondominiumService.add(
        Condominium.name,
        Condominium.cnpj,
        Condominium.idAddress,
        Condominium.idConstructionCompany,
        Condominium.numberCondominium);
    res.json(result);
});
routes.delete('/delete/:id', async (req, res) => {
    let result = await CondominiumService.delete(req.params.id);
    res.json({ delete: result })
});

module.exports = routes;





