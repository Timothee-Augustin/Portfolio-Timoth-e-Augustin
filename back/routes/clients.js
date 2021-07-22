const clientRoutes = require('express').Router();
const connection = require('../db-config');

clientRoutes.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM client',
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving the clients from database');
      } else {
        res.json(results);
      }
    },
  );
});

clientRoutes.get('/:id', (req, res) => {
  const clientId = req.params.id;
  connection.query(
    'SELECT project.name as project_name FROM client INNER JOIN project_client on client.id = project_client.client_id INNER JOIN project on project_client.project_id = project.id WHERE client.id = ?',
    [clientId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving the client from database');
      } else {
        res.json(results);
      }
    },
  );
});

module.exports = clientRoutes;
