import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesModules } from './modules/modules-routes';


@NgModule({
  imports: [RouterModule.forRoot(routesModules)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
