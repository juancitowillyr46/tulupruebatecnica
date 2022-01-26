import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { NgZorroImportsModule } from '../shared/ng-zorro-imports.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    NgZorroImportsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    OrderComponent
  ]
})
export class ModulesModule { }
