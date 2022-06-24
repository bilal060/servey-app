import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servey-one',
  templateUrl: './servey-one.component.html'
})
export class ServeyOneComponent implements OnInit {
  
  radioValue: any
  formOne: FormGroup;
  routerLink: any

  constructor(private router: Router) { 
    this.radioValue="quote",
    this.formOne = new FormGroup({
      Qoutee: new FormControl(null, Validators.required),
    });
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  setNext() {
    localStorage.setItem("optionValue", this.radioValue);
    this.router.navigate(['/', 'step-two'])
  }

  ngOnInit(): void {
  }

  get Qoute() {
    return this.formOne.get('quote');
  }

}
