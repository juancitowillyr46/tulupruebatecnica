import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducer';
import { ModulesModule } from './modules/modules.module';
// import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from './shared/shared.module';
// import { NgZorroImportsModule } from './shared/ng-zorro-imports.module';
// import { LoginComponent } from './modules/login/login.component';
// import { RegisterComponent } from './modules/register/register.component';
// import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
// import { OrderComponent } from './modules/order/order.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Firebase Config
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

    // Ngrx
    StoreModule.forRoot({ count: counterReducer }),
  

    // Shared Module
    SharedModule,

    // Modules
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
