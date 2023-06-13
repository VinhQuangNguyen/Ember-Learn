import Service from '@ember/service';

export default class LoginService extends Service {
  login(username, password) {
    if (username === 'abcd' && password === '1234') {
      return 1;
    } else {
      return 2;
    }
  }
}
