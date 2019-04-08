const express = require('express');
const router = express.Router();

const Registros = require('../models/registro');

router.get('/', (req, res) => {
  res.send();
});

router.post('/', async (req, res) => {
  const { ph, od, tp } = req.body;
  try {
    const reg = await Registros.create(req.body);
    return res.send(reg);
  } catch (err) {
    return res.status(400).send({ error: 'Falha no registro' });
  }
});



module.exports = app => app.use('/api', router);