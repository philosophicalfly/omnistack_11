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
async function insertIncident(incidentData, ngoId) {
  const newIncident = {
    ...incidentData,
    ngo_id: ngoId
  };
  const [id] = await connection('incident').insert(newIncident);
  return id
}


async function list(req, res) {
  let {
    page = 1
  } = req.query;
  const qtt = 5;
  const count = await countIncidents();
  const incidents = await listIncidents(page, qtt);

  res.header('X-Total-Count', count);
  return res.json(incidents);
}
async function countIncidents() {
  const [count] = await connection('incident').count();
  return count['count(*)'];
}
async function listIncidents(page, qtt) {
  const incidents = await connection('incident')
    .join('ngo', 'ngo.id', '=', 'incident.ngo_id')
    .limit(qtt)
    .offset((page - 1) * qtt)
    .select(['incident.*', 'ngo.name', 'ngo.email', 'ngo.whatsapp', 'ngo.city', 'ngo.uf']);
  return incidents
}


async function removeAll(req, res) {
  const incidents = await deleteIncidents();
  return res.json(incidents);
}
async function deleteIncidents() {
  const incidents = await connection('incident')
    .delete('*');
  return incidents
}


async function remove(req, res) {
  const {
    id
  } = req.params;
  const ngoId = req.headers.authorization;
  const status = await getPermissionToRemove(ngoId, id);
  if (status == 204) {
    await deleteIncident(id);
  }
  return res.status(status).send();
}
async function getPermissionToRemove(ngoId, id) {
  const incident = await connection('incident')
    .where('id', id)
    .select('ngo_id')
    .first();
  if (!incident) {
    return 404; //Not Found
  }
  if (incident.ngo_id !== ngoId) {
    return 401; //Unauthorized
  }
  return 204; //No Content
}
async function deleteIncident(id) {
  const incidents = await connection('incident')
    .where('id', id)
    .delete();
  return
}

module.exports = {
  create,
  list,
  removeAll,
  remove
}
