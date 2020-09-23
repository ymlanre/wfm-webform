import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebformComponent } from './webform/webform.component';

const routes: Routes = [
  {
    path: "",
    component: WebformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
