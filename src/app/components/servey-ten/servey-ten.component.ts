import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-ten',
  templateUrl: './servey-ten.component.html',
  styleUrls: ['./servey-ten.component.css']
})
export class ServeyTenComponent implements OnInit {

  radioValue: any

  constructor() { 
    this.radioValue="One side Turnstile"
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
