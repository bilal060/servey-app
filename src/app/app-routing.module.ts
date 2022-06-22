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
import { ServeyElevenComponent } from './components/servey-eleven/servey-eleven.component';
import { ServeyTenComponent } from './components/servey-ten/servey-ten.component';
import { ServeyTwelveComponent } from './components/servey-twelve/servey-twelve.component';
import { ServeyThirteenComponent } from './components/servey-thirteen/servey-thirteen.component';
import { ServeyFourteenComponent } from './components/servey-fourteen/servey-fourteen.component';
import { ServeyFifteenComponent } from './components/servey-fifteen/servey-fifteen.component';
import { ServeySixteenComponent } from './components/servey-sixteen/servey-sixteen.component';
import { ServeySeventeenComponent } from './components/servey-seventeen/servey-seventeen.component';
import { ServeyEighteenComponent } from './components/servey-eighteen/servey-eighteen.component';
import { ServeyNineteenComponent } from './components/servey-nineteen/servey-nineteen.component';
import { ServeyTwentyComponent } from './components/servey-twenty/servey-twenty.component';
import { ServeyTwentyoneComponent } from './components/servey-twentyone/servey-twentyone.component';
import { ServeyTwentytwoComponent } from './components/servey-twentytwo/servey-twentytwo.component';
import { ServeyTwentythreeComponent } from './components/servey-twentythree/servey-twentythree.component';
import { ServeyTwentyfourComponent } from './components/servey-twentyfour/servey-twentyfour.component';

const routes: Routes = [
  { path: '', redirectTo: "step-one", pathMatch: 'full' },
  { path: 'step-one', component: ServeyOneComponent },
  { path: 'step-two', component: ServeyTwoComponent },
  { path: 'step-three', component: ServeyThreeComponent },
  { path: 'step-four', component: ServeyFourComponent },
  { path: 'step-five', component: ServeyFiveComponent },
  { path: 'step-six', component: ServeySixComponent },
  { path: 'step-seven', component: ServeySevenComponent },
  { path: 'step-eight', component: ServeyEightComponent },
  { path: 'step-nine', component: ServeyNineComponent },
  { path: 'step-ten', component: ServeyTenComponent },
  { path: 'step-eleven', component: ServeyElevenComponent },
  { path: 'step-twelve', component: ServeyTwelveComponent },
  { path: 'step-thirteen', component: ServeyThirteenComponent },
  { path: 'step-fourteen', component: ServeyFourteenComponent },
  { path: 'step-fifteen', component: ServeyFifteenComponent },
  { path: 'step-sixteen', component: ServeySixteenComponent },
  { path: 'step-seventeen', component: ServeySeventeenComponent },
  { path: 'step-eighteen', component: ServeyEighteenComponent },
  { path: 'step-nineteen', component: ServeyNineteenComponent },
  { path: 'step-twenty', component: ServeyTwentyComponent },
  { path: 'step-twentyone', component: ServeyTwentyoneComponent },
  { path: 'step-twentytwo', component: ServeyTwentytwoComponent },
  { path: 'step-twentythree', component: ServeyTwentythreeComponent },
  { path: 'step-twentyfour', component: ServeyTwentyfourComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
