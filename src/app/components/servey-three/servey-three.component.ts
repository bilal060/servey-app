import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servey-three',
  templateUrl: './servey-three.component.html'
})
export class ServeyThreeComponent implements OnInit {

  optionValue: any;

  constructor(private router: Router) {
      this.optionValue = localStorage.getItem("optionValue");
   }

  checkNext() {
    if( this.optionValue == "quote") {
      this.router.navigate(['/', 'step-six']);
    }
    else {
      this.router.navigate(['/', 'step-four']);
    }
  }

  ngOnInit(): void {
  }

}
