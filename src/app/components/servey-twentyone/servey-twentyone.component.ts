import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-twentyone',
  templateUrl: './servey-twentyone.component.html',
  styleUrls: ['./servey-twentyone.component.css']
})
export class ServeyTwentyoneComponent implements OnInit {

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
