import { module, test } from 'qunit';
import { setupTest } from 'ember-beverages/tests/helpers';

module('Unit | Service | favorite-beverages', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:favorite-beverages');
    assert.ok(service);
  });
});
