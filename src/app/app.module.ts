import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { RightFormComponent } from './components/right-form/right-form.component';
import { HomeComponent } from './home/home.component';
import { ServeyOneComponent } from './components/servey-one/servey-one.component';
import { ServeyTwoComponent } from './components/servey-two/servey-two.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftImageComponent,
    RightFormComponent,
    HomeComponent,
    ServeyOneComponent,
    ServeyTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
