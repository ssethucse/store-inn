import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../common/customer';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

 httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:8085');

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = environment.baseUrl + '/authenticate1';

  constructor(private httpClient: HttpClient) { }

  getAuthenticateDetail(customer: Customer): Observable<any>{
     return this.httpClient.post<any>(this.authUrl,customer).pipe(map(response=> response));
  }

}
