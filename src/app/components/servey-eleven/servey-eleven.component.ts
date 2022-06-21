import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-eleven',
  templateUrl: './servey-eleven.component.html',
  styleUrls: ['./servey-eleven.component.css']
})
export class ServeyElevenComponent implements OnInit {

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
