import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../common/customer';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private mobileUrl = environment.baseUrl + '/user/validate';

  constructor(private httpClient: HttpClient) { }

     ValidateUser(user: Customer): Observable<any>{
           return this.httpClient.post<any>(`${this.mobileUrl}`,user).pipe(
                                                                      map(response=> response)
                                                                      );
   }
}
