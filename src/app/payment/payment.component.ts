import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'
import { Chocolate } from '../chocolate';
import { ChocolateService } from '../chocolate.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  submitted=false;
  msg:string;
  constructor(private formBuilder: FormBuilder, private chocolateService:ChocolateService) { }
  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',[Validators.required,Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]],
      creditCardType:[''],
      creditCardNumber:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(16),Validators.maxLength(16)]],
      cardExpDate:['',Validators.required],
      securityCode:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3),Validators.maxLength(3)]]
    });
  }

  
    

}



