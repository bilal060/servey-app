import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-seventeen',
  templateUrl: './servey-seventeen.component.html',
  styleUrls: ['./servey-seventeen.component.css']
})
export class ServeySeventeenComponent implements OnInit {

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
