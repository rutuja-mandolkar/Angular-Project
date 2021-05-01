import { Injectable } from '@angular/core';
import {Chocolate} from './chocolate';
import {CHOCOLATE} from './chocolate-data';
import{CART,PRODUCT} from './cart-data';
import { Cart } from './cart';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChocolateService {

  constructor() { }
  
  getChocolates(){
    return CHOCOLATE;
  }
  getCart(){
    this.getQuantityAndPrice()
    return CART;
  }

  addToCart(chocolate:Chocolate){
   
    if(CART.length==0){
    let cart:Cart={
        chocolate:chocolate,
        quantity:1,
        price:chocolate.price
    };
    CART.push(cart);
  }
    
  else{
    let id=0;
    for(let item of CART){
      if(item.chocolate.id==chocolate.id){
        id=item.chocolate.id;
      }
    }
    if(id==0){
      let cart:Cart={
        chocolate:chocolate,
        quantity:1,
        price:chocolate.price
    };
    CART.push(cart);
    }
    else{
      for(let item of CART){
        if(item.chocolate.id==id){
          item.quantity+=1;
          item.price=item.quantity*item.chocolate.price;
        }
      }

    }
  }
  
    return CART;

  }
   
  removeItem(item:Cart){
    if(item.quantity>1){
      item.quantity-=1;
      item.price=item.quantity*item.chocolate.price;
    }
    else{
      let index=CART.indexOf(item);
      CART.splice(index,1);
    }
  }
  
  
  getQuantityAndPrice(){
    PRODUCT.totalQuantity=0;
    PRODUCT.totalPrice=0;
    for (let item of CART){
       PRODUCT.totalQuantity+=item.quantity;
       PRODUCT.totalPrice+=item.price;
      }
    return PRODUCT.totalPrice,PRODUCT.totalQuantity;
  }
   

  clearCart(){
    CART.splice(0,CART.length);
  }
 
}
