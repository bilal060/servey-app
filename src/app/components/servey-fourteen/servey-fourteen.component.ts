import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-fourteen',
  templateUrl: './servey-fourteen.component.html',
  styleUrls: ['./servey-fourteen.component.css']
})
export class ServeyFourteenComponent implements OnInit {

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
