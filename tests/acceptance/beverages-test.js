import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-beverages/tests/helpers';

module('Acceptance | beverages', function (hooks) {
  setupApplicationTest(hooks);

  //Checking presence of expected elements
  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('nav h1').hasText('Embers Beverages');
    assert.dom('nav ul').exists();
    assert.dom('#content').exists();
    assert.dom('#content div').exists();
    assert.dom('#content div h1').hasText('Beverages');
  });

  test('visiting /favorites', async function (assert) {
    await visit('/favorites');

    assert.strictEqual(currentURL(), '/favorites');
    assert.dom('nav').exists();
    assert.dom('nav h1').hasText('Embers Beverages');
    assert.dom('nav ul').exists();
    assert.dom('#content').exists();
    assert.dom('#content div').exists();
    assert.dom('#content h1').hasText('Favorites');
  });

  test('navigating using the menu', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav ul li a.menu-home').hasText('» Beverages');
    assert.dom('nav ul li a.menu-favs').hasText('» Favorites');

    await click('nav ul li a.menu-favs');
    assert.strictEqual(currentURL(), '/favorites');

    await click('nav ul li a.menu-home');
    assert.strictEqual(currentURL(), '/');
  });
});
