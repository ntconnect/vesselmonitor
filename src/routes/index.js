const mapsRouter = require('./maps');
const siteRouter = require('./siteRouter');
function route(app) {
  app.use('/maps', mapsRouter);
  app.use('/', siteRouter);
}
module.exports = route;
