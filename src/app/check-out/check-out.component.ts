import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',[Validators.required,Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]]
    });
  }

  
}

