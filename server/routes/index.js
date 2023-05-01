const usersRoutes = require('./users');
const stackRoutes = require('./stack');
const constructorMethod = (app) => {
  app.use('/user', usersRoutes);
  app.use('/stack', stackRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;