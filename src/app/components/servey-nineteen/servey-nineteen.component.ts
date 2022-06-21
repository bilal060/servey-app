import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-nineteen',
  templateUrl: './servey-nineteen.component.html',
  styleUrls: ['./servey-nineteen.component.css']
})
export class ServeyNineteenComponent implements OnInit {

  radioValue:any

  constructor() { 
    this.radioValue="residential"
  }

  checkedRadio = (value:any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
