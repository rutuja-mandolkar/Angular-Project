import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:'menu',component:MenuComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'', redirectTo:'/menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
