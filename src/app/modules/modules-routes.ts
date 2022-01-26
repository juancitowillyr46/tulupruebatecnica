import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { OrderComponent } from "./order/order.component";
import { RegisterComponent } from "./register/register.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

export const routesModules: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'shop', component: ShoppingCartComponent
    },
    {
        path: 'order', component: OrderComponent
    }
];