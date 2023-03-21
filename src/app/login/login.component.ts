import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from '../common/customer';
import { OtpService } from 'src/app/service/otp.service';
import { AuthService } from 'src/app/service/auth.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

phone: string="";
otp: string="";

storage: Storage = localStorage;

constructor( private route: ActivatedRoute,
             private router: Router,
             private userService: OtpService,
             private authService: AuthService,
             private toastr: ToastrService){

}

ngOnInit(): void{
}


submit(){
if(this.otp=="" || this.otp==null || this.phone=="" || this.phone==null){
return;
}else{
let customer = new Customer();

  customer.phone = this.phone;
  customer.identity = this.otp;
  this.authService.getAuthenticateDetail(customer).subscribe({
  next: response => {
    this.storage.setItem('authToken',JSON.stringify(`${response.data}`));
    this.router.navigateByUrl('members');
  },
  error: err => {
    console.log(`There was an error:${err.message}`);
    return;
  }
  });

}
}

}
