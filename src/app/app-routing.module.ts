import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServeyOneComponent } from './components/servey-one/servey-one.component';
import { ServeyTwoComponent } from './components/servey-two/servey-two.component';
import { ServeyThreeComponent } from './components/servey-three/servey-three.component';
import { ServeyFourComponent } from './components/servey-four/servey-four.component';
import { ServeyFiveComponent } from './components/servey-five/servey-five.component';
import { ServeySixComponent } from './components/servey-six/servey-six.component';
import { ServeySevenComponent } from './components/servey-seven/servey-seven.component';
import { ServeyEightComponent } from './components/servey-eight/servey-eight.component';
import { ServeyNineComponent } from './components/servey-nine/servey-nine.component';
const routes: Routes = [
  { path: 'nine', component: ServeyNineComponent },
  { path: 'one', component: ServeyOneComponent },
  { path: 'two', component: ServeyTwoComponent },
  { path: 'three', component: ServeyThreeComponent },
  { path: 'four', component: ServeyFourComponent },
  { path: 'five', component: ServeyFiveComponent },
  { path: 'six', component: ServeySixComponent },
  { path: 'seven', component: ServeySevenComponent },
  { path: 'eight', component: ServeyEightComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
