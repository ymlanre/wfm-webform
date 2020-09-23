import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWebform(formToken:string): Observable<any> {
    return this.http.get(`web-form?filter[token]=${formToken}`);
    // https://api.cicodsaasdev.com/wfm/web-form?filter[token]={token} 
  }
}
