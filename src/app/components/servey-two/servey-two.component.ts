import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-two',
  templateUrl: './servey-two.component.html',
  styleUrls: ['./servey-two.component.css']
})
export class ServeyTwoComponent implements OnInit {

  radioValue:any

  constructor() { 
    this.radioValue="quote"
  }

  checkedRadio = (value:any) => {
    this.radioValue = value;
  }

  ngOnInit(): void {
  }

}
