const technoRoute = require('express').Router();
const connection = require('../db-config');

technoRoute.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM techno ',
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving the technos from database');
      } else {
        res.json(results);
      }
    },
  );
});

technoRoute.get('/:id', (req, res) => {
  const projectId = req.params.id;
  connection.query(
    'SELECT project.name as project_name FROM techno INNER JOIN project_techno on techno.id = project_techno.techno_id INNER JOIN project on project_techno.project_id = project.id WHERE techno.id = ?',
    [projectId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving the technos from database');
      } else {
        res.json(results);
      }
    },
  );
});

module.exports = technoRoute;
