import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-nine',
  templateUrl: './servey-nine.component.html',
  styleUrls: ['./servey-nine.component.css']
})
export class ServeyNineComponent implements OnInit {

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
