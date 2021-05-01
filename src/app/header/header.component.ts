import { Component, OnInit } from '@angular/core';
import { ChocolateService } from '../chocolate.service';
import { CART, PRODUCT } from '../cart-data';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(private chocolateService:ChocolateService) { 
   
  }

  
ngOnInit():void{
  
   
       
  }
}
