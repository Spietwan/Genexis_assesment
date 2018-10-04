import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let isLoggedIn = false;
    const username = 'admin'; // * should be replaced with API call to verify username+passowrd combination
    const password = 'password'; // * should be replaced with API call to verify username+passowrd combination
    const loginFalseText = (<HTMLInputElement>document.getElementById('loginFalseText'));
    loginFalseText.style.display = 'none';
    const usernameInput = (<HTMLInputElement>document.getElementById('username'));
    const passwordInput = (<HTMLInputElement>document.getElementById('password'));
    const loginButton = (<HTMLInputElement>document.getElementById('loginButton'));

    loginButton.addEventListener('click', () => {
      if (usernameInput.value === username && passwordInput.value === password) {
        isLoggedIn = true;
        console.log(isLoggedIn);
        console.log('username and password correct');
        location.href = '/wlansettings';
      } else {
        console.log('unknown username/password combination');
        loginFalseText.style.display = 'inline-block';
      }
    });

    passwordInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (usernameInput.value === username && passwordInput.value === password) {
          isLoggedIn = true;
          console.log(isLoggedIn);
          console.log('username and password correct');
          location.href = '/wlansettings';
        } else {
          console.log('unknown username/password combination');
          loginFalseText.style.display = 'inline-block';
        }
      }
    });

    usernameInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (usernameInput.value === username && passwordInput.value === password) {
          isLoggedIn = true;
          console.log(isLoggedIn);
          console.log('username and password correct');
          location.href = '/wlansettings';
        } else {
          console.log('unknown username/password combination');
          loginFalseText.style.display = 'inline-block';
        }
      }
    });
  }

}
