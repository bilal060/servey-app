import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-twentythree',
  templateUrl: './servey-twentythree.component.html',
  styleUrls: ['./servey-twentythree.component.css']
})
export class ServeyTwentythreeComponent implements OnInit {

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
