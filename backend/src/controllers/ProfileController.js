const connection = require('../database/connection');

async function list(req, res) {
  const body = req.body;
  const ngoId = req.headers.authorization;
  const incidents = await connection('incident').where('ngo_id', ngoId).select('*');
  return res.json(incidents);
}

module.exports = {
  list
}
