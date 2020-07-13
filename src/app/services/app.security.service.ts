import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData, Register, Login, ProductServiceModel } from '../model/app.product.model';

@Injectable({providedIn: 'root'})
export class TokenSecureService {
  constructor(private http: HttpClient) { }

  registerUser(user: Register): Observable<ResponseData> {
    let resp: Observable<ResponseData>;
    resp = this.http.post<ResponseData>(`http://localhost:5000/api/Auth/Register`,
     user, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
    return resp;
  }

  loginUser(user: Login): Observable<ResponseData> {
    let resp: Observable<ResponseData>;
    resp = this.http.post<ResponseData>(`http://localhost:5000/api/Auth/Login`,
     user, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
    return resp;
  }

  getData(token: string): Observable<ProductServiceModel[]> {
    let resp: Observable<ProductServiceModel[]>;
    resp = this.http.get<ProductServiceModel[]>(`http://localhost:5000/api/Products`, {
      headers: new HttpHeaders({
        AUTHORIZATION: `Bearer ${token}`
      })
    });
    return resp;
  }

}
