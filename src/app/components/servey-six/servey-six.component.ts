import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-six',
  templateUrl: './servey-six.component.html',
  styleUrls: ['./servey-six.component.css']
})
export class ServeySixComponent implements OnInit {

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
