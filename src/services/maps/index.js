'use strict';

const service = require('feathers-sequelize');
const maps = require('./maps-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: maps(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/maps', service(options));

  // Get our initialize service to that we can bind hooks
  const mapsService = app.service('/maps');

  // Set up our before hooks
  mapsService.before(hooks.before);

  // Set up our after hooks
  mapsService.after(hooks.after);
};
