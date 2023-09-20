import { module, test } from 'qunit';
import { setupTest } from 'ember-beverages/tests/helpers';

module('Unit | Route | favourites', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:favourites');
    assert.ok(route);
  });
});