const express = require('express');
const router = express.Router();

const Registros = require('../models/registro');

router.get('/', async (req, res) => {
  try {
    const reg = await Registros.find();
    return res.send({ reg });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao carregar os registros' });
  }
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

router.get('/teste', async (req, res) => {
  try {
    return res.json({
    	"conexão": "Concluida",
    });
  } catch (err) {
    return res.status(400).send({ error: 'Falha no servidor heroku, mas conexão feita' });
  }
});



module.exports = app => app.use('/api', router);