'use strict';

const hooks = require('./hooks')
const request = require('request')

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    request('https://maps.googleapis.com/maps/api/js?key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI&callback=initMap', function (err, res) {
            var map
            function initMap() {
              map = new google.maps.Map(), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
              }
            }
          })
          console.log(res);
    return Promise.resolve(res)
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    })
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/maps2', new Service());

  // Get our initialize service to that we can bind hooks
  const maps2Service = app.service('/maps2');

  // Set up our before hooks
  maps2Service.before(hooks.before);

  // Set up our after hooks
  maps2Service.after(hooks.after);
};

module.exports.Service = Service;
