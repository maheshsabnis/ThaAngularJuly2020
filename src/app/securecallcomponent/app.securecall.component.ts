import { Component, OnInit } from '@angular/core';
import { TokenSecureService } from '../services/app.security.service';
import { Register, Login } from '../model/app.product.model';

@Component({
  selector: 'app-securecall-component',
  templateUrl: './app.secuercall.view.html'
})

export class SecureCallComponent implements OnInit {
  constructor(private serv: TokenSecureService) { }

  ngOnInit() { }

  registerUser(): void {
    const user =  new Register(
      'muser2@msit.com', 'P@ssw0rd_', 'P@ssw0rd_'
    );
    this.serv.registerUser(user).subscribe((resp) => {
      console.log(`Received Message ${resp.message}`);
    }, (error) => {
      console.log(`Some Error Occred ${error}`);
    });
  }

  loginUser(): void {
    const user =  new Login(
      'muser2@msit.com', 'P@ssw0rd_'
    );
    this.serv.loginUser(user).subscribe((resp) => {
      console.log(`Received Message ${resp.message}`);
      // save the tokne in sessionStorage
      sessionStorage.setItem('token', resp.message);
    }, (error) => {
      console.log(`Some Error Occred ${error}`);
    });
  }

  getProducts(): void {
    // read the token from the session storage
    const token = sessionStorage.getItem('token');
    this.serv.getData(token).subscribe((resp) => {
      console.log(`Response received ${JSON.stringify(resp)}`);
    }, (error) => {
      console.log(`Some Error Occred ${error}`);
    });
  }



}
