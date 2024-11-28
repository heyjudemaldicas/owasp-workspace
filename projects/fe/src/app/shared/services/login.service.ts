import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { username, password })
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
