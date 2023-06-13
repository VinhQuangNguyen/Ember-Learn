import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, find, findAll} from '@ember/test-helpers';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Login />`);

    const labelElms = findAll('label');
    assert.equal(labelElms.length, 2);

    let nameWrapperContent = labelElms.find(e => e.textContent.includes('Username'));
    assert.equal( !!nameWrapperContent, true );

    assert.equal(nameWrapperContent.textContent.trim(), "Username")
  });
});
