import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInterceptorService } from './providers/custom-interceptor.service';
import { ApiService } from './providers/api-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebformComponent } from './webform/webform.component';

@NgModule({
  declarations: [AppComponent, WebformComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
