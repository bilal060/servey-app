import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servey-two',
  templateUrl: './servey-two.component.html',
  styleUrls: ['./servey-two.component.css']
})
export class ServeyTwoComponent implements OnInit {

  constructor() { }
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnInit(): void {
  }

}
