import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpRequest,
  HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  private static AUTHORIZATION_HEADER = 'authorization';

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = this.interceptRequest(request);

    return next.handle(req)
      .do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.interceptResponse(event);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.interceptError(err);
        }
      });
  }

  interceptRequest(request: HttpRequest<any>) {
    request = this.addAuthorizationTokenIfExist(request);
    return request;
  }

  interceptResponse(res: HttpResponse<any>) {
    this.saveAuthorizationTokenIfExist(res);
  }

  interceptError(err: HttpErrorResponse) {
    console.log('Intercepting error response: ', err);

    if (err.status === 401) {
      this.router.navigate(['/login']);
    }
  }

  addAuthorizationTokenIfExist(request: HttpRequest<any>) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('jwtToken')
        }
      });
    }

    return request;
  }

  saveAuthorizationTokenIfExist(res: HttpResponse<any>) {
    const authToken = res.headers.get(AppInterceptor.AUTHORIZATION_HEADER);
    if (authToken) {
      localStorage.setItem('jwtToken', authToken)
    }
  }

}
