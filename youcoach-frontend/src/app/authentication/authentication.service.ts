import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'jwt_token';

  constructor(private loginService: LoginService) {
  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        sessionStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer' , '').trim());
      }));
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.tokenKey) !== null;
  }
}
