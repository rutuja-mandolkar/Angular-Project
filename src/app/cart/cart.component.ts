import { Component, OnInit } from '@angular/core';
import{CART,PRODUCT} from '../cart-data'
import { ChocolateService } from '../chocolate.service';
import { Chocolate } from '../chocolate';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private chocolateService:ChocolateService) { }
  
  cart:Cart[]=[];
  totalPrice:number=0;
  totalQuantity:number=0;
  //indexedArray: {[Key: Chocolate]: number} = {};

  getAll(){
    this.cart=CART;
    this.totalPrice=PRODUCT.totalPrice;
    this.totalQuantity=PRODUCT.totalQuantity;
  }

  addToCart(chocolate:Chocolate){
    this.chocolateService.addToCart(chocolate);
    this.chocolateService.getQuantityAndPrice();
    this.totalPrice=PRODUCT.totalPrice;
    this.totalQuantity=PRODUCT.totalQuantity;
  }

  removeItem(item:Cart){
  this.chocolateService.removeItem(item);
  this.chocolateService.getQuantityAndPrice();
  this.totalPrice=PRODUCT.totalPrice;
  this.totalQuantity=PRODUCT.totalQuantity;
  }

  ngOnInit(): void {
    this.getAll();
    
  }

}
