import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice, Login } from '../shared/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'https://invoice-app-bknd-strapi-cloud.onrender.com';

  constructor(private http: HttpClient) {}

  login(credentials: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiUrl}/invoices`);
  }
}
