import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from 'src/app/service/auth-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DordersComponent } from './dorders/dorders.component';



const routes: Routes = [
{path: 'members', component: OrdersComponent},
{path: 'dorders', component: DordersComponent},
{path: 'orders', component: MembersComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    LoginComponent,
    OrdersComponent,
    DordersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
        ReactiveFormsModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      MatCardModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
