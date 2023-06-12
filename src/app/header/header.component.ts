import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userInformation: string;
  role: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userInformation = localStorage.getItem('UserInformation');
    this.role = localStorage.getItem('Role');
  }
  clearStorage() {
    localStorage.clear();
    window.location.reload();
  }
}
