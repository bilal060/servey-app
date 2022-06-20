import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-four',
  templateUrl: './servey-four.component.html',
  styleUrls: ['./servey-four.component.css']
})
export class ServeyFourComponent implements OnInit {

  radioValue: any

  constructor() { 
    this.radioValue="icon4"
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  }


  ngOnInit(): void {
  }

}
