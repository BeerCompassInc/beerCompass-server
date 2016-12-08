'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('maps service', function() {
  it('registered the maps service', () => {
    assert.ok(app.service('maps'));
  });
});
