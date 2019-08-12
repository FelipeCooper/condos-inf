//
const express = require('express');
const routes = express.Router();
const CondominiumService = require('../services/CondominiumService');

routes.get('/', async function (req, res) {
    condos = await CondominiumService.read();
    res.render('pages/index', {
        condominium: undefined,
        condos: condos
    });
});
routes.get('/pesquisar/:id', async function (req, res) {
    condos = await CondominiumService.read();
    condominium = await CondominiumService.readID(req.params.id);
    res.render('pages/index', {
        condos: condos,
        condominium: condominium
    })
});
routes.get('/atualizar', async function (req, res) {
    console.log(req.body)
    res.send('oi')
});

module.exports = routes;