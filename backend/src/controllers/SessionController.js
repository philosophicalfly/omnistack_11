const crypto = require('crypto');
const connection = require('../database/connection');

async function create(req, res) {
  const body = req.body;
  console.log('body', req.body);
  if (body && body.id) {
    const name = await connection('ngo').where('id', body.id).select('name').first();
    if (!name) {
      return res.status(400).json({
        error: 'No NGO with this ID'
      })
    }
    return res.json(name);
  }
  return res.json({
    error: "Not enough data provided."
  });
}

module.exports = {
  create
}
