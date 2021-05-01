import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    HeaderComponent,
    CheckOutComponent,
    PaymentComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
