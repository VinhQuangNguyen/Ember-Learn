import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, fillIn, click, find, findAll } from '@ember/test-helpers';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1)
    await render(hbs`<Login />`);
    let elements = findAll('label');
    let element_username = elements.filter(e => e.textContent.includes('Username'));
    assert.equal(!!element_username, true);

    // console.log("element_username", element_username)
    // let element_password = elements.filter(e => e.textContent.includes('Password'))
    // console.log('element_password', element_password)


    // let nameLabelElement = find('#name-label')
    // assert.equal(!!nameLabelElement, true);
    // assert.equal(nameLabelElement.textContent, 'Username');


    // let pwLabelElement = find('#pw-label')
    // assert.equal(!!pwLabelElement, true);
    // assert.equal(pwLabelElement.textContent, 'Password');

    // let loginSubmitElement = find('#login-submit')
    // assert.equal(!!loginSubmitElement, true);
    // assert.equal(loginSubmitElement.textContent, 'Login');

    // await fillIn('#name-val', 'abcd');
    // await fillIn('#pw-val', '1234');
    // await click('#login-submit');
    // assert.equal(this.element.textContent.trim().includes('Login success !!!'), true);

    // await fillIn('#name-val', 'abcde');
    // await click('#login-submit');
    // assert.equal(this.element.textContent.trim().includes('Login failed !!!'), true);
  });
});
