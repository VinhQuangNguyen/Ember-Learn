import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Service | login', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:login');
    assert.ok(service);
  });
});
