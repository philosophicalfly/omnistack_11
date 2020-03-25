const connection = require('../database/connection');

async function create(req, res) {
  const body = req.body;
  const ngoId = req.headers.authorization;
  if (body && body.title && body.description && body.value) {
    const newIncident = await insertIncident(body, ngoId);
    return res.json({
      id: newIncident
    });
  }
  return res.json({
    error: "Not enough data provided."
  });
}

async function list(req, res) {
  const incidents = await listIncidents();
  return res.json(incidents);
}

async function remove(req, res) {
  const incidents = await deleteIncidents();
  return res.json(incidents);
}

async function insertIncident(incidentData, ngoId) {
  const newIncident = {
    ...incidentData,
    ngo_id: ngoId
  };
  const [id] = await connection('incident').insert(newIncident);
  return id
}

async function listIncidents() {
  const incidents = await connection('incident').select('*');
  return incidents
}

async function deleteIncidents() {
  const incidents = await connection('incident').delete('*');
  return incidents
}

module.exports = {
  create,
  list,
  remove
}
