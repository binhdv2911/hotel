import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: AccountService, private router: Router) {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    UserName: new FormControl(),
    PassWord: new FormControl(),
  });
  onSubmit() {
    this.loginService.loginService(this.loginForm.value).subscribe((res) => {
      localStorage.setItem('TokenData', res.data);
      if (res.user !== null) {
        localStorage.setItem('idUser', res.user.accountID);
        localStorage.setItem('UserInformation', res.user.fullName);
        localStorage.setItem('Role', res.user.departmentCode);
        this.router.navigate(['homepage']).then(() => {
          this.router.navigateByUrl('/homepage');
          window.location.reload();
        });
      }
    });
  }
}
