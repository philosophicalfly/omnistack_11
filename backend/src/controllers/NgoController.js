const crypto = require('crypto');
const connection = require('../database/connection');

async function create(req, res) {
  const body = req.body;
  if (body && body.name && body.email && body.whatsapp && body.city && body.uf) {
    const newNgoId = await insertNgo(body);
    return res.json({
      id: newNgoId
    });
  }
  return res.json({
    error: "Not enough data provided."
  });
}

async function list(req, res) {
  const ngos = await listNgos();
  return res.json(ngos);
}

async function remove(req, res) {
  const ngos = await deleteNgos();
  return res.json(ngos);
}

async function insertNgo(ngoData) {
  const id = crypto.randomBytes(4).toString('HEX');
  const newNgo = {
    id,
    ...ngoData
  };
  await connection('ngo').insert(newNgo);
  return id
}

async function listNgos() {
  const ngos = await connection('ngo').select('*');
  return ngos
}

async function deleteNgos() {
  const ngos = await connection('ngo').delete('*');
  return ngos
}

module.exports = {
  create,
  list,
  remove
}
