import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, findAll, fillIn, click, find } from '@ember/test-helpers';

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
    await fillIn(inputUsernameElement, 'abcd');
    assert.equal(inputUsernameElement.value, 'abcd')
    
    // get label contain 'Password'
    let pwWrapperContent = labelElms.find(e => e.textContent.includes('Password'));
    // check exist username wrapper
    assert.equal( !!pwWrapperContent, true );
    // if exist password container, check it has content is 'Password'
    assert.equal(pwWrapperContent.textContent.trim(), "Password")
    // get element input in name wrapper
    let inputPasswordElement = pwWrapperContent.querySelector('input');
    // fill value is abcd to this input
    await fillIn(inputPasswordElement, 1234);
    assert.equal(inputPasswordElement.value, 1234)
    
    // Find the button element
    const buttonElement = find('button');
    // Click the button element
    await click(buttonElement);

    const sttSuccess = find('#sign-in-success');
    assert.equal(!!sttSuccess, true)
    // console.log('111', sttSuccess.textContent)
    assert.equal(sttSuccess.textContent.trim() , "Login success !!!" )
  });
});
