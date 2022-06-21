import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servey-seven',
  templateUrl: './servey-seven.component.html',
  styleUrls: ['./servey-seven.component.css'],
})
export class ServeySevenComponent implements OnInit {
  carChecked:any

  constructor() {
    this.carChecked = false
  }
  toggleEditable(event: any) {
    console.log(event.target.checked);
    this.carChecked = event.target.checked
  }
  ngOnInit(): void {}
}
