// import { HttpInterceptorFn } from '@angular/common/http';

// export const headerInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
// src/app/auth.interceptor.ts
// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.loginService.logout();
        }
        return throwError(error);
      })
    );
  }
}