import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signUp(info: any) {
    console.log(info);
    return this.http.post('https://combine4api.herokuapp.com/signup', info, {
      observe: 'response',
    });
  }

  signIn(info: any) {
    return this.http.post('https://combine4api.herokuapp.com/login', info, {
      observe: 'response',
    });
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getUser() {}

  isLoggedIn() {
    return this.getToken() ? true : false;
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
