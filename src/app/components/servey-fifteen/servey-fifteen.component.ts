import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-fifteen',
  templateUrl: './servey-fifteen.component.html',
  styleUrls: ['./servey-fifteen.component.css']
})
export class ServeyFifteenComponent implements OnInit {

  radioValue: any

  constructor() { 
    this.radioValue="Manual"
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
