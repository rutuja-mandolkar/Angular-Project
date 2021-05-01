import { Component, OnInit } from '@angular/core';
import { ChocolateService } from '../chocolate.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private chocolateService:ChocolateService) { }

  ngOnInit(): void {
      this.chocolateService.clearCart();
      this.chocolateService.getQuantityAndPrice;
  }

}
