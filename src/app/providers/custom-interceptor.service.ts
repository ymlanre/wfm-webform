import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root"
})
export class CustomInterceptorService implements HttpInterceptor {
  merchantUrl: string ;
  // merchantUrl: string = "https://blakesshawn.cicod.com/webshop";
  merchantName: string ;
  constructor() {}
  
  
  getTenantId() {
    this.merchantUrl = window.location.href;
        
    //  this.merchantUrl = "https://betty.cicod.com/webshop/"
    this.merchantUrl = this.merchantUrl .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    this.merchantName = this.merchantUrl.split('.')[0];
    return this.merchantName;
  }
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tenantId: string = "blakesshawn";

    let headers: any;
    headers = { Authorization: "", "Content-Type": "application/json" };

    headers = { Authorization: "", "Content-Type": "application/json" };
    headers["Tenant-ID"] = "10028";

    request = request.clone({
      url: environment.BASE_URL + request.url,
      setHeaders: headers
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : "",
          status: error.status
        };
   
        return throwError(error);
      })
    );
  }
}
