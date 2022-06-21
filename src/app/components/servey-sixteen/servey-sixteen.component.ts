import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-sixteen',
  templateUrl: './servey-sixteen.component.html',
  styleUrls: ['./servey-sixteen.component.css']
})
export class ServeySixteenComponent implements OnInit {

  radioValue: any

  constructor() { 
    this.radioValue="residential"
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
