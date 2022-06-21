import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { RightFormComponent } from './components/right-form/right-form.component';
import { HomeComponent } from './home/home.component';
import { ServeyOneComponent } from './components/servey-one/servey-one.component';
import { ServeyTwoComponent } from './components/servey-two/servey-two.component';
import { ServeyThreeComponent } from './components/servey-three/servey-three.component';
import { ServeyFourComponent } from './components/servey-four/servey-four.component';
import { ServeyFiveComponent } from './components/servey-five/servey-five.component';
import { ServeySixComponent } from './components/servey-six/servey-six.component';
import { ServeySevenComponent } from './components/servey-seven/servey-seven.component';
import { ServeyEightComponent } from './components/servey-eight/servey-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftImageComponent,
    RightFormComponent,
    HomeComponent,
    ServeyOneComponent,
    ServeyTwoComponent,
    ServeyThreeComponent,
    ServeyFourComponent,
    ServeyFiveComponent,
    ServeySixComponent,
    ServeySevenComponent,
    ServeyEightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
