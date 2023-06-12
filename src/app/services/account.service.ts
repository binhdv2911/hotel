import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loginService(Users: Users): Observable<any> {
    console.log(Users);
    return this.http.post<any>(this.apiUrl + '/v1/api/login/Login', Users);
  }
}
