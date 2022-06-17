import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-one',
  templateUrl: './servey-one.component.html',
  styleUrls: ['./servey-one.component.css']
})
export class ServeyOneComponent implements OnInit {
  
  radioValue: any

  constructor() { 
    this.radioValue="quote"
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
