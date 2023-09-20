import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-beverages/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | beverage-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BeverageList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BeverageList>
        template block text
      </BeverageList>
    `);

    assert.dom().hasText('template block text');
  });
});
