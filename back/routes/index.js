const routes = require('express').Router();

routes.post('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

const projectRoutes = require('./projects');
const uploadRoute = require('./upload');
// const technologyRoutes = require('./technologies');
// const clientRoutes = require('./clients');
// const adminRoutes = require('./admin');

routes.use('/projects', projectRoutes);
routes.use('/upload', uploadRoute);
// routes.use('/technologies', technologyRoutes);
// routes.use('/clients', clientRoutes);
// routes.use('/admin', adminRoute);

module.exports = routes;
