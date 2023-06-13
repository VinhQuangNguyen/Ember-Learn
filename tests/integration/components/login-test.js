import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, find, findAll, fillIn } from '@ember/test-helpers';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Login />`);

    // get all label tag
    const labelElms = findAll('label');
    assert.equal(labelElms.length, 2);

    // get label contain 'Username'
    let nameWrapperContent = labelElms.find(e => e.textContent.includes('Username'));
    // check exist username wrapper
    assert.equal( !!nameWrapperContent, true );

    // if exist username container, check it has content is 'Username'
    assert.equal(nameWrapperContent.textContent.trim(), "Username")

    // get element input in name wrapper
    let inputUsernameElement = nameWrapperContent.querySelector('input');
    // fill value is abcd to this input
    fillIn(inputUsernameElement, 'abcd');
    // check input value, expect equal 'abcd'

    
  });
});
