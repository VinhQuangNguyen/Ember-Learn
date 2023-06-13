import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginComponent extends Component {
  @service login;
  @tracked username = '';
  @tracked password = '';
  @tracked loginStt = 0;

  @action
  handleSubmit(event) {
    event.preventDefault();
    const resLogin = this.login.login(this.username, this.password);
    this.loginStt = resLogin;
  }
}
