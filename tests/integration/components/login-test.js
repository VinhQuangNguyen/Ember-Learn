import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, find } from '@ember/test-helpers';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Login />`);

    let labelElement = find('label');
    console.log('111', labelElement)
    let labelText = labelElement.textContent;
    console.log('222', labelText)
    let inputElement = labelElement.querySelector('input');
    console.log('333', inputElement)
  });
});
