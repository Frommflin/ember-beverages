import { module, test } from 'qunit';
import { setupTest } from 'ember-beverages/tests/helpers';

module('Unit | Route | beverages', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:beverages');
    assert.ok(route);
  });
});
