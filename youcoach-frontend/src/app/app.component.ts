import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from './login/login.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youcoach';
  loginForm;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    this.loginService.login(loginData).subscribe();
    this.loginForm.reset();
  }

}
