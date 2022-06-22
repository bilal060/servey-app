import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-one',
  templateUrl: './servey-one.component.html',
  styleUrls: ['./servey-one.component.css']
})
export class ServeyOneComponent implements OnInit {
  
  radioValue: any
  formOne: FormGroup;

  constructor() { 
    this.radioValue="quote",
    this.formOne = new FormGroup({
      quote: new FormControl(null, Validators.required),
    });
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

  get Qoute() {
    return this.formOne.get('quote');
  }

}
