import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { from,Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Customer } from 'src/app/common/customer';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  accessToken: string= "";
  private storage: Storage = localStorage;

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return from(this.handleAccess(req,next));
  }

  private async handleAccess(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>>{
    const urlOrder = ['order/findByCustomerPhone','order/deliveredOrders','order/findAllOrders','order/findProgressOrders','order/status/upgrade','order/findCustomerProfile','order/invoice'];

    this.accessToken = JSON.parse(this.storage.getItem('authToken') || '{}');

    if(urlOrder.some(url => req.urlWithParams.includes(url))){
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer '+ this.accessToken
        }
      });

    }
    return await from(next.handle(req)).toPromise();

  }
}
