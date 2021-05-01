import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Chocolate} from '../chocolate';
import {CHOCOLATE} from '../chocolate-data'
import { ChocolateService } from '../chocolate.service';
import { ActivatedRoute } from '@angular/router';
import { CART, PRODUCT } from '../cart-data';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  chocolates:Chocolate[]=[];
  filteredChocolates:Chocolate[]=[];
  category:string;
  totalQuantity:number;

  constructor(private chocolateService: ChocolateService,
              private route:ActivatedRoute ) {
                
               }
  @Output() getQuantity = new EventEmitter<number>();

  ngOnInit(): void {
    this.getChocolates();
   
  }

  getChocolates(){
    this.chocolates=this.chocolateService.getChocolates();
    this.route.queryParamMap.subscribe(params=>{
      this.category=params.get('category');
      this.filteredChocolates=(this.category)?
      this.chocolates.filter(p=>p.category==this.category):
      this.chocolates});
      this.totalQuantity=PRODUCT.totalQuantity;
  }

  
  addToCart(chocolate:Chocolate){
    this.chocolateService.addToCart(chocolate);
    this.chocolateService.getQuantityAndPrice();
    this.totalQuantity=PRODUCT.totalQuantity;
  }
}
