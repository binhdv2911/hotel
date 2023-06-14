import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userInformation: string;
  role: string;
  constructor(private router: Router, private loginService: AccountService) {}

  ngOnInit(): void {
    this.userInformation = localStorage.getItem('UserInformation');
    this.role = localStorage.getItem('Role');
  }
  clearStorage() {
    localStorage.clear();
    window.location.reload();
  }
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
