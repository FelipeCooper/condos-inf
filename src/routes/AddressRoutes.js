const AddressServices = require('../services/AddressServices');
const express = require('express');

const routes = express.Router();


routes.get('/show', async (req, res) => {
    let result = await AddressServices.read(req.body.id);
    res.json(result);
})
routes.post('/register', async (req, res) => {
    let body = req.body;
    let result = await AddressServices.save(body.street, body.district, body.cep, body.city);
    res.json(result);
})
routes.put('/update', async (req, res) => {
    let body = req.body;
    let result = await AddressServices.update(body.street, body.district, body.cep, body.city, body.id);
    res.json(result);
})
routes.delete('/delete/:id', async (req, res) => {
    let result = await AddressServices.delete(req.body.id);
    res.json({ delete: result })
})

module.exports = routes;