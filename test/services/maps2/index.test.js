'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('maps2 service', function() {
  it('registered the maps2s service', () => {
    assert.ok(app.service('maps2s'));
  });
});
