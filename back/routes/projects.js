const projectRoutes = require('express').Router();
const connection = require('../db-config');

projectRoutes.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM project',
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving the projects from database');
      } else {
        res.json(results);
      }
    },
  );
});

projectRoutes.post('/', (req, res) => {
  const {
    name, date, description, picture1, picture2, link
  } = req.body;
  connection.query(
    'INSERT INTO project(`name`, `date`, `description`, `picture1`, `picture2`, `link`) VALUES (?, ?, ?, ?, ?, ?)',
    [name, date, description, picture1, picture2, link],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving the project');
      } else {
        const newProject = {
          id: result.insertId,
          name,
          date,
          description,
          picture1,
          picture2,
          link,
        };
        res.status(201).send(newProject);
      }
    },
  );
});

projectRoutes.put('/:id', (req, res) => {
  const projectId = req.params.id;
  connection.query(
    'SELECT * FROM project WHERE id = ?',
    [projectId],
    (err, selectResults) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating the project');
      } else {
        const projectFromDb = selectResults[0];
        if (projectFromDb) {
          const projectPropsToUpdate = req.body;
          connection.query(
            'UPDATE project SET ? WHERE id = ?',
            [projectPropsToUpdate, projectId],
            (err) => {
              if (err) {
                console.log(err);
                res.status(500).send('Error updating the project');
              } else {
                const updated = { ...projectFromDb, ...projectPropsToUpdate };
                res.status(200).send(updated);
              }
            },
          );
        } else {
          res.status(404).send(`Project with id ${projectId} not found.`);
        }
      }
    },
  );
});

projectRoutes.delete('/:id', (req, res) => {
  const projectId = req.params.id;
  connection.query(
    'DELETE FROM project WHERE id = ?',
    [projectId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting the project');
      } else {
        res.status(200).send('Project deleted!');
      }
    },
  );
});

module.exports = projectRoutes;
