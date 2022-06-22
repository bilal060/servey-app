import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-one',
  templateUrl: './servey-one.component.html'
})
export class ServeyOneComponent implements OnInit {
  
  radioValue: any
  formOne: FormGroup;

  constructor() { 
    this.radioValue="quote",
    this.formOne = new FormGroup({
      Qoutee: new FormControl(null, Validators.required),
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
