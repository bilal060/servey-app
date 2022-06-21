import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-eighteen',
  templateUrl: './servey-eighteen.component.html',
  styleUrls: ['./servey-eighteen.component.css']
})
export class ServeyEighteenComponent implements OnInit {

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
