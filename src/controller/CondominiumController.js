//
const express = require('express');
const routes = express.Router();
const CondominiumService = require('../services/CondominiumService');

routes.get('/show', async function (req, res) {
    condos = await CondominiumService.read();
    res.json(condos)
});

routes.get('/search/:id', async function (req, res) {
    condominium = await CondominiumService.readID(req.params.id);
    res.json(condominium)
});

routes.post('/update', async function (req, res) {
    let body = req.body;
    let result = await CondominiumService.update(
        body.name,
        body.cnpj, 
        body.addres,
        body.id );
    res.json(result)
});

routes.post('/register', async (req,res) =>{
    let Condominium = req.body;
    console.log(Condominium.cep)
    let result = await CondominiumService.add(
        Condominium.name,
        Condominium.cnpj,
        Condominium.addres,
        Condominium.cep,
        Condominium.city,
        Condominium.constructionCompany,
        Condominium.numberCondominium,
        Condominium.numberOfUnits,
        Condominium.bloco,
        Condominium.numberOfBlocos,
        Condominium.numberOfGarage,
        Condominium.numberOfHb,
        Condominium.numberOfShop,
        Condominium.numberOfEmployee);
    res.json(result);
});
routes.get('/delete/:id'), async (req,res) =>{
    let result = await CondominiumService.delete(req.params.id);
    res.json({delete:result})
}

module.exports = routes;